import React, { useState } from 'react';
import { ReactNode } from 'react';
import { PostProps } from '../types/Types';
import { Sbtn, SDate, SEdfinBtn, SEditArea, SPost, SSideBarTextArea } from '../styles/Post';
import { SName } from '../styles/Header';

export default function Post(props: PostProps) {
  const { token, post, userUuid, delPost, editPost } = props;
  
  //ポストの形を作る
  const getDateStr = () => {
    const year = post.createdAt.getFullYear();
    const month = post.createdAt.getMonth() + 1;
    const date = post.createdAt.getDate();
    const hour = post.createdAt.getHours();
    const min = post.createdAt.getMinutes();
    const sec = post.createdAt.getSeconds();
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
    editPost(token,userUuid,post.id,msg)
  }
  //削除ボタンの関数
  const delButton = async() => {
    delPost(userUuid,token,post.id);
  }

  //ユーザーのuuidが一致していたら削除、編集ボタンを表示
  return(
    <SPost>
      <div>
        <SName>{post.userName}</SName>
        <SDate>{getDateStr()}</SDate>
        {userUuid === post.userUuid&& !edit && (
          <>
          <Sbtn onClick={ediStBtn}>編集</Sbtn>
          <Sbtn onClick={delButton}>削除</Sbtn>
          </>
        )}
      </div>
      {edit ? (
        <SEditArea>
          <SSideBarTextArea
            rows={4}
            value={msg}
            onChange={(evt) => setMsg(evt.target.value)}
            ></SSideBarTextArea>
          <SEdfinBtn onClick={ediFnBtn}>編集完了</SEdfinBtn>
        </SEditArea>
      ) : (
        <div>{getLines(post.content)}</div>
      )}
    </SPost>
  )
}
