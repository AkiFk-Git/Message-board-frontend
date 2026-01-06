import { useState, useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { PostListContext } from "../providers/PostListProvider";
import { post, getList } from "../api/Post";
import { getUser } from "../api/User";
import { PostType } from "../types/Types";
import { SSideBar } from "../styles/MainLayout";
import { SSideBarButton, SSideBarRow, SUmail, SUname, SUserInfo } from "../styles/SideBar";
import { SSideBarTextArea } from "../styles/Post";

export default function SideBar() {
  const [ userName, setUserName ] = useState("");
  const [ usermail, setUserMail ] = useState("");
  const [msg, setMsg] = useState("");
  const { userInfo } = useContext(UserContext);
  const { setPostList } = useContext(PostListContext);

  //ユーザー情報の取得
  useEffect(() => {
    const myGetUser = async() => {
      const user = await getUser(userInfo.userUuid, userInfo.token);
      setUserName(user.name);
      setUserMail(user.umail);
    };
    myGetUser();
  }, []);

  //ポストリストを取得する関数
  const getPostList = async () => {
    const posts = await getList(userInfo.token);
		const postList: Array<PostType> = posts ? posts.map((p: PostType) => ({
				id: p.id,
				userUuid: p.userUuid,
				userName: p.userName,
				content: p.content,
				createdAt: new Date(p.createdAt),
		})):[]
    setPostList(postList);
  };

  //送信ボタンの関数
  const onSendClick = async() => {
  	await post(userInfo.userUuid, userInfo.token, msg);
	  await getPostList();
    setMsg("")
  };

  return (
    <SSideBar>
      <SUserInfo>
        <SUname>{userName}</SUname>
        <SUmail>({usermail})</SUmail>
      </SUserInfo>
      <SSideBarRow>
        <SSideBarTextArea
          rows={4}
          value={msg}
          onChange={(evt) => setMsg(evt.target.value)}
        ></SSideBarTextArea>
      </SSideBarRow>
      <SSideBarRow>
        <SSideBarButton onClick={onSendClick}>投稿</SSideBarButton>
      </SSideBarRow>
    </SSideBar>
  );
}

