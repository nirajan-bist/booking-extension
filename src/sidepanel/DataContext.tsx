import React from "react";
import { BonusData, BuyData, SaleData, StatusData } from "../types/response";

const DataContext = React.createContext(null);

type Data = {
  status: StatusData[];
  buy: BuyData[];
  sale: SaleData[];
  bonus: BonusData[];
};

type DataContextType = { data: Data; setData: (data: Data) => void };

const DataProvider = ({ children }) => {
  const [data, setData] = React.useState<Data>({
    status: [],
    buy: [],
    sale: [],
    bonus: [],
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = React.useContext<DataContextType>(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useDataContext };
