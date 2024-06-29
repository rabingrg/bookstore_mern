import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  authUser: string;
  handleAuthUser: (user: string) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  authUser: "",
  handleAuthUser: () => {},
});

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const initialAuthUser = localStorage?.getItem("user");
  const [authUser, setAuthUser] = useState<string>(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  const handleAuthUser = (user: string) => {
    setAuthUser(user);
  };

  return (
    <AuthContext.Provider value={{ authUser, handleAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
