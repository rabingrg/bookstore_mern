import { createContext, ReactNode, useEffect, useState } from "react";

interface IAuthUser {
  id: string;
  emailId: string;
  fullName: string;
}
interface AuthContextProps {
  authUser: IAuthUser;
  handleAuthUser: (user: IAuthUser) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  authUser: { id: "", emailId: "", fullName: "" },
  handleAuthUser: () => {},
});

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const initialAuthUser = localStorage?.getItem("user");
  const [authUser, setAuthUser] = useState<IAuthUser>({
    id: "",
    emailId: "",
    fullName: "",
  });
  const handleAuthUser = (user: IAuthUser) => {
    setAuthUser(user);
  };

  useEffect(() => {
    if (initialAuthUser) {
      setAuthUser(JSON.parse(initialAuthUser));
    }
  }, [initialAuthUser]);

  return (
    <AuthContext.Provider value={{ authUser, handleAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
