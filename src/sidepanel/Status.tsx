import React from "react";
import useTab from "../hooks/useTab";
import { http } from "../utils/http";
import { BonusData, BuyData, SaleData, StatusData } from "../types/response";
import { useDataContext } from "./DataContext";
import TabGroup from "./TabGroup";
import { message, Table, Tag } from "antd";
import CheckboxGroup from "./CheckboxGroup";
import { copyToClipboard } from "../utils/common";

const tabs = [
  { id: "1h", label: "1 Hr", value: "1h" },
  { id: "6h", label: "6 Hr", value: "6h" },
  { id: "1d", label: "1 D", value: "1d" },
  { id: "7d", label: "7 D", value: "7d" },
  { id: "total", label: "All", value: "total" },
];

const subTabs = [
  { id: "buy", label: "Buy", value: "buy" },
  { id: "sale", label: "Sale", value: "sale" },
  { id: "bonus", label: "Bonus", value: "bonus" },
  { id: "available", label: "Available", value: "available" },
];
const TAG_COLORS = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];
const DATA_REFETCH_INTERVAL = 1000 * 60 * 5; // 5 minute(s)

const Status = () => {
  const { activeTab, activateTab } = useTab(tabs);
  const [activeTabs, setActiveTabs] = React.useState<string[]>([activeTab.id]);
  const { activeTab: activeSubTab, activateTab: activateSubTab } =
    useTab(subTabs);

  const { data, setData } = useDataContext();
  const [messageApi, contextHolder] = message.useMessage();

  const filteredData = React.useMemo(() => {
    // Filter data based on if the status=='Active' in the StatusData for all buy,sell,bonus
    const activeStatusData = data.status.filter(
      (item) => item.status === "Active"
    );

    const activeStatusMap: Record<string, StatusData> = activeStatusData.reduce(
      (acc, item) => {
        acc[item.email] = item;
        return acc;
      },
      {}
    );

    const activeBuyData = data.buy.filter(
      (item) => activeStatusMap[item.email]
    );
    const activeSaleData = data.sale.filter(
      (item) => activeStatusMap[item.email]
    );
    const activeBonusData = data.bonus.filter(
      (item) => activeStatusMap[item.email]
    );

    const availableData = activeBuyData.map((buyItem) => {
      const email = buyItem.email;
      const saleItem = activeSaleData.find((item) => item.email === email) || {
        "1h_sale_count": 0,
        "1h_sale_sum": 0,
        "6h_sale_count": 0,
        "6h_sale_sum": 0,
        "1d_sale_count": 0,
        "1d_sale_sum": 0,
        "7d_sale_count": 0,
        "7d_sale_sum": 0,
        total_sale_count: 0,
        total_sale_sum: 0,
      };
      const bonusItem = activeBonusData.find(
        (item) => item.email === email
      ) || {
        "1h_bonus_count": 0,
        "1h_bonus_sum": 0,
        "6h_bonus_count": 0,
        "6h_bonus_sum": 0,
        "1d_bonus_count": 0,
        "1d_bonus_sum": 0,
        "7d_bonus_count": 0,
        "7d_bonus_sum": 0,
        total_bonus_count: 0,
        total_bonus_sum: 0,
      };

      return {
        email,
        code: activeStatusMap[email].code,
        "1h_available_count":
          buyItem["1h_buy_count"] -
          saleItem["1h_sale_count"] +
          bonusItem["1h_bonus_count"],
        "1h_available_sum":
          buyItem["1h_buy_sum"] -
          saleItem["1h_sale_sum"] +
          bonusItem["1h_bonus_sum"],
        "6h_available_count":
          buyItem["6h_buy_count"] -
          saleItem["6h_sale_count"] +
          bonusItem["6h_bonus_count"],
        "6h_available_sum":
          buyItem["6h_buy_sum"] -
          saleItem["6h_sale_sum"] +
          bonusItem["6h_bonus_sum"],
        "1d_available_count":
          buyItem["1d_buy_count"] -
          saleItem["1d_sale_count"] +
          bonusItem["1d_bonus_count"],
        "1d_available_sum":
          buyItem["1d_buy_sum"] -
          saleItem["1d_sale_sum"] +
          bonusItem["1d_bonus_sum"],
        "7d_available_count":
          buyItem["7d_buy_count"] -
          saleItem["7d_sale_count"] +
          bonusItem["7d_bonus_count"],
        "7d_available_sum":
          buyItem["7d_buy_sum"] -
          saleItem["7d_sale_sum"] +
          bonusItem["7d_bonus_sum"],
        total_available_count:
          buyItem["total_buy_count"] -
          saleItem["total_sale_count"] +
          bonusItem["total_bonus_count"],
        total_available_sum:
          buyItem["total_buy_sum"] -
          saleItem["total_sale_sum"] +
          bonusItem["total_bonus_sum"],
      };
    });

    return {
      buy: activeBuyData,
      sale: activeSaleData,
      bonus: activeBonusData,
      available: availableData,
      activeStatusMap,
    };
  }, [data]);

  const columns = [
    { key: "time", dataIndex: "time", title: "Time" },
    {
      key: "code",
      dataIndex: "code",
      title: "Code",
      render: (_, { code, coupon, key }) => (
        <Tag
          color={TAG_COLORS[parseInt(key) % TAG_COLORS.length]}
          className="cursor-pointer"
          onClick={() => {
            copyToClipboard(coupon);
            messageApi.success(`Copied! ${coupon}`);
          }}
        >
          {code}
        </Tag>
      ),
    },
    { key: "count", dataIndex: "count", title: "Count" },
    { key: "sum", dataIndex: "sum", title: "Sum" },
  ];

  const [tableData, setTableData] = React.useState<Record<string, string>[]>(
    []
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const statusResponse: StatusData[] = await http.get(
        `https://script.google.com/macros/s/AKfycbxYIPxrVMF5eFdwvow1PCYSwYDLHsN0mdtf2w3ufgsfbAaVL88j72GjBhBaNhGL2F-c2g/exec`
      );
      const buyResponse: BuyData[] = await http.get(
        "https://script.google.com/macros/s/AKfycbxxQu_U_tiTbBB1dntgGuISjbhC_5X4uw-47xO8O1-jcZbzOGJaBbdR6-DFtKVld3Qk1Q/exec"
      );
      const saleResponse: SaleData[] = await http.get(
        "https://script.google.com/macros/s/AKfycbxahzbkZKRytcRB8BuzEO_PNaGoT0DPcKi3AdTLFzkcNp7xISsXeUPzD5XmuJVfiCFXug/exec"
      );
      const bonusResponse: BonusData[] = await http.get(
        "https://script.google.com/macros/s/AKfycbwMCp7knj9-YMrAG2Xf5haYBRRBkYbZqmmSZHdWgHMxh4f59kwBGPPfY-p6EGchH5wM8w/exec"
      );

      const salesData = {
        status: statusResponse,
        buy: buyResponse,
        sale: saleResponse,
        bonus: bonusResponse,
      };
      setData(salesData);
      chrome.storage.local.set({ salesData, lastFetched: Date.now() });
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    // Fetch data from API

    let timeout = null;
    const fetchOrSetData = () =>
      chrome.storage.local.get((storage) => {
        const { salesData, lastFetched } = storage;
        if (salesData) {
          setData(salesData);
        }

        if (
          salesData &&
          lastFetched &&
          Date.now() - lastFetched < DATA_REFETCH_INTERVAL
        ) {
          setData(salesData);
          clearTimeout(timeout);
          timeout = setTimeout(
            fetchOrSetData,
            DATA_REFETCH_INTERVAL - (Date.now() - lastFetched)
          );
        } else {
          fetchData();
          clearTimeout(timeout);
          timeout = setTimeout(fetchOrSetData, DATA_REFETCH_INTERVAL);
        }
      });
    fetchOrSetData();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  React.useEffect(() => {
    const data = filteredData[activeSubTab.id];

    // const tableData = data.map((item, index) => ({
    //   key: index,
    //   email: item.email,
    //   code: filteredData.activeStatusMap[item.email].code,
    //   count: item[`${activeTab.id}_${activeSubTab.id}_count`],
    //   sum: parseFloat(item[`${activeTab.id}_${activeSubTab.id}_sum`]).toFixed(
    //     2
    //   ),
    // }));
    let tableData = [];

    activeTabs.forEach((activeTab, outerIndex) => {
      tableData = tableData.concat(
        data.map((item, index) => ({
          key: `${outerIndex}${index}`,
          time: activeTab,
          email: item.email,
          code: filteredData.activeStatusMap[item.email].code,
          coupon: filteredData.activeStatusMap[item.email].coupon,
          count: item[`${activeTab}_${activeSubTab.id}_count`],
          sum: parseFloat(item[`${activeTab}_${activeSubTab.id}_sum`]).toFixed(
            2
          ),
        }))
      );
    });

    setTableData(tableData);
  }, [activeTab, activeSubTab, filteredData, activeTabs]);

  return (
    <div className="status-tab overflow-auto">
      {contextHolder}
      <div className="sticky top-0 backdrop-blur-sm z-10">
        <div className="mb-4 flex justify-center ">
          <TabGroup
            value={activeSubTab.value}
            options={subTabs}
            onChange={(v: string) => activateSubTab(v)}
          />
        </div>
        <div className="mb-4 flex justify-center">
          <CheckboxGroup
            values={activeTabs}
            options={tabs}
            onChange={(v: string[]) => {
              setActiveTabs(v);
            }}
          />
        </div>
      </div>
      {isLoading && (
        <div className="text-center font-semibold text-base">Loading...</div>
      )}
      <div>
        <Table
          columns={columns as any}
          dataSource={tableData}
          size="small"
          pagination={{ pageSize: 15 }}
        />
      </div>
    </div>
  );
};

export default Status;
