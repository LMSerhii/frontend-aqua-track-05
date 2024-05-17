import { createContext, useContext, useState } from 'react';

const AmountContext = createContext();

export const AmountProvider = ({ children }) => {
  const [amountData, setAmountData] = useState([]);

  return (
    <AmountContext.Provider value={{ amountData, setAmountData }}>
      {children}
    </AmountContext.Provider>
  );
};

export const useAmount = () => useContext(AmountContext);
