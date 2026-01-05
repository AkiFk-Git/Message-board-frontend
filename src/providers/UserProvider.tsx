import { useState, createContext, Dispatch, SetStateAction } from "react";

// 保持する情報の型
type UserInfo = {
  user_uuid: string;
  token: string;
};

// UserContextの作成
export const UserContext = createContext(
  {} as {
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  },
);

// UserProviderの定義
export const UserProvider = (props: any) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState<UserInfo>({ user_uuid: "", token: "" });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};