import React from "react";
import useTab from "../hooks/useTab";
import { http } from "../utils/http";
import { BonusData, BuyData, SaleData, StatusData } from "../types/response";
import { useDataContext } from "./DataContext";

const tabs = [
  { id: "1h", label: "1 Hr" },
  { id: "6h", label: "6 Hr" },
  { id: "1d", label: "1 D" },
  { id: "7d", label: "7 D" },
  { id: "total", label: "All" },
];

const subTabs = [
  { id: "buy", label: "Buy" },
  { id: "sale", label: "Sale" },
  { id: "bonus", label: "Bonus" },
];

const DATA_REFETCH_INTERVAL = 1000 * 60 * 5; // 5 minute(s)

const Status = () => {
  const { activeTab, activateTab } = useTab(tabs);
  const { activeTab: activeSubTab, activateTab: activateSubTab } =
    useTab(subTabs);

  const renderTabs = () => (
    <div className="flex justify-center mb-4 text-sm">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`px-4 py-2 cursor-pointer ${
            activeTab.id === tab.id ? "bg-blue-600 text-white" : "bg-blue-200"
          }`}
          onClick={() => activateTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );

  const renderSubTabs = () => (
    <div className="flex justify-center mb-4 text-sm">
      {subTabs.map((tab) => (
        <div
          key={tab.id}
          className={`px-4 py-2 cursor-pointer ${
            activeSubTab.id === tab.id
              ? "bg-blue-600 text-white"
              : "bg-blue-200"
          }`}
          onClick={() => activateSubTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );

  // Function to render a alternating colored table showing items and their status
  const renderTable = (
    columns: Record<string, string>[],
    tableData: Record<string, string>[]
  ) => (
    <table className="table-auto w-full">
      <thead className="bg-gray-100 sticky top-[94px]">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="px-4 py-2 border border-gray-400">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-200 " : ""}>
            {columns.map((column) => (
              <td key={column.key} className="border border-gray-400 px-4 py-2">
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const { data, setData } = useDataContext();

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

    return {
      buy: activeBuyData,
      sale: activeSaleData,
      bonus: activeBonusData,
      activeStatusMap,
    };
  }, [data]);

  const columns = [
    { key: "code", label: "Code" },
    { key: "count", label: "Count" },
    { key: "sum", label: "Sum" },
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

    const tableData = data.map((item) => ({
      email: item.email,
      code: filteredData.activeStatusMap[item.email].code,
      count: item[`${activeTab.id}_${activeSubTab.id}_count`],
      sum: parseFloat(item[`${activeTab.id}_${activeSubTab.id}_sum`]).toFixed(
        2
      ),
    }));

    setTableData(tableData);
  }, [activeTab, activeSubTab, filteredData]);

  return (
    <div className="status-tab overflow-auto">
      <div className="sticky top-0 backdrop-blur-sm">
        {renderTabs()} {renderSubTabs()}
      </div>
      {isLoading && (
        <div className="text-center font-semibold text-base">Loading...</div>
      )}
      {renderTable(columns, tableData)}
    </div>
  );
};

export default Status;
