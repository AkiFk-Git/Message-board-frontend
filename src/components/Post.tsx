import React, { useState } from 'react';
import { ReactNode } from 'react';
import styled from "styled-components";

export default function Post(props: any) {
  const { token, post, user_uuid, delPost, editPost } = props;
  
  //ポストの形を作る
  const getDateStr = () => {
    const year = post.created_at.getFullYear();
    const month = post.created_at.getMonth() + 1;
    const date = post.created_at.getDate();
    const hour = post.created_at.getHours();
    const min = post.created_at.getMinutes();
    const sec = post.created_at.getSeconds();
    return `${year}年${month}月${date}日 ${hour}時${min}分${sec}秒`;
  };
  const getLines = (src: string):ReactNode => {
    return src.split('\n').map((line, index) => {
      return (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )
    });
  }

  //編集状態の監視
  const [edit, setEdit] = useState(false)
  //編集欄の監視
  const [msg, setMsg] = useState("");
  
  //編集開始ボタンの関数 
  const ediStBtn = async() => {
    setMsg(post.content)
    setEdit(true);
  }
  //編集完了ボタンの関数
  const ediFnBtn = async() => {
    setEdit(false);
    editPost(token,user_uuid,post.id,msg)
  }
  //削除ボタンの関数
  const delButton = async() => {
    delPost(user_uuid,token,post.id);
  }

  //ユーザーのuuidが一致していたら削除、編集ボタンを表示
  return(
    <SPost>
      <div>
        <SName>{post.user_name}</SName>
        <SDate>{getDateStr()}</SDate>
        {user_uuid === post.user_uuid&& !edit && (
          <>
          <Sbtn onClick={ediStBtn}>編集</Sbtn>
          <Sbtn onClick={delButton}>削除</Sbtn>
          </>
        )}
      </div>
      {edit ? (
        <>
          <SSideBarTextArea
            rows={4}
            value={msg}
            onChange={(evt) => setMsg(evt.target.value)}
            ></SSideBarTextArea>
          <SedFnBtn onClick={ediFnBtn}>編集完了</SedFnBtn>
        </>
      ) : (
        <div>{getLines(post.content)}</div>
      )}
    </SPost>
  )
}

const SPost = styled.div`
  margin: 8px 0px;
  border-bottom: 1px solid #AAAAAA;
  text-align: left;
  padding-left: 8px;
`

const SName = styled.span`
  font-size: small;
  color: #000044;
`

const SDate = styled.span`
  margin-left: 8px;
  font-size: small;
  color: #000044;
`

const Sbtn = styled.button`
  margin-left: 8px;
  font-size: .7rem;
  background-color: none;
  color: #000044;
  border: none;
  cursor: pointer;
`
const SSideBarTextArea = styled.textarea`
  margin-top: .6rem;
  border-radius: 4px;
  box-shadow: inset 0 2px 4px #CCCCCC;
`

const SedFnBtn = styled.button`
  margin-left: 8px;
  font-size: .7rem;
  background-color: none;
  color: #000044;
  border: none;
`