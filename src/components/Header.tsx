import { useState,useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { getUser } from "../api/User";
import { SHeader, SLogo, SLogout, SName, SRightItem } from "../styles/Header";

export default function Header() {
  const navigate = useNavigate();
  const [ userName, setUserName ] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext);

  //ログアウトの関数
  const logout = () => {
    setUserInfo({ userUuid: "", token: "" });
    navigate("/");
  };

  //表示するユーザー情報の取得
  useEffect(() => {
    //サインイン・サインアップ画面時は何もしない
    if (!userInfo.token) {
        return; 
    }

    const myGetUser = async() => {
      const user = await getUser(userInfo.userUuid, userInfo.token);
      setUserName(user.name);
    };
    myGetUser();
  }, [userInfo.token, userInfo.userUuid]);

  return (
    <SHeader>
      <SLogo>MicroPost</SLogo>
      {userInfo.token ? (
      <SRightItem>
        <SName>{userName}</SName>
        <SLogout onClick={logout}>ログアウト</SLogout>
      </SRightItem>
      ) : (
        <></>
      )}
    </SHeader>
  );
}
