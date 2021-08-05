import React, { useState } from "react";

const Context = React.createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

type user = {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
};

const ContextProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<user[]>([]);

  return <Context.Provider value={{ userData }}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
