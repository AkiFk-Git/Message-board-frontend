import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";

// 保持する情報の型
type UserInfo = {
  userUuid: string;
  token: string;
};

// PoviderのPropsを型定義
interface UserProviderProps {
  children: ReactNode;
}

// UserContextの作成
export const UserContext = createContext(
  {} as {
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  },
);

// UserProviderの定義
export const UserProvider = (props: UserProviderProps) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState<UserInfo>({ userUuid: "", token: "" });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};