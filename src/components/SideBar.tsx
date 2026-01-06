import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import { PostListContext } from "../providers/PostListProvider";
import { post, getList } from "../api/Post";
import { getUser } from "../api/User";
import { PostType } from "../types/Types";

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
    let postList: Array<PostType> = [];
    if (posts) {
      posts.forEach((p: any) => {
        postList.push({
          id: p.id,
          userUuid: p.userUuid,
          userName: p.userName,
          content: p.content,
          createdAt: new Date(p.createdAt),
        });
      });
    }
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

const SSideBar = styled.div`
  padding: 8px;
`
const SUserInfo = styled.div`
  margin-top: 12px;
  padding-left: 1rem;
  text-align: left;
  display: flex;
  align-items: center;
`

const SUname = styled.div`
  color: #222222;
`
const SUmail = styled.div`
  color: #222222;
  font-size: .8rem;
`

const SSideBarRow = styled.div`
  margin-top: 2px;
  margin: 30px 0 4px 0;
  text-align: center;
`
const SSideBarTextArea = styled.textarea`
  width: 70%;
  border-radius: 4px;
  box-shadow: inset 0 2px 4px #CCCCCC;
`

const SSideBarButton = styled.button`
  background-color: #222222;
  padding: 4px;
  border-radius: 8px;
  color: #FAFAFA;
  width: 70%;
  cursor: pointer;
`