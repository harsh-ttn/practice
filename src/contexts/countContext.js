import { createContext, useState } from "react";

export const CountContext = createContext(null);

const CountProvider = ({ children }) => {
  const [count2, setCount2] = useState(0);

  return (
    <CountContext.Provider value={{ count2, setCount2 }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;