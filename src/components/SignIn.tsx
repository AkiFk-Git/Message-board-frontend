import { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { sign_in } from '../api/Auth'; 
import { UserContext } from "../providers/UserProvider";

export default function SignIn() {
  const navigate = useNavigate(); 
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState(''); 
  const { setUserInfo } = useContext(UserContext);
  
  //ログインボタンの処理
  const onSignInClick = async() => {
    //サインイン処理をして結果を取得
    const res = await sign_in(userName, pass);
    //認証結果ごとの処理
    if(!res){
      alert("認証に失敗しました")
    }else if(res.inp){
      alert("正しく入力されていません")
    }else if(res.user){
      alert("ユーザー名またはパスワードに誤りがあります")
    }else if(res.token&&res.user_uuid) {
      navigate("/main");
      setUserInfo({
        user_uuid: res.user_uuid,
        token: res.token,
      });
    }else {
      alert ("認証に失敗しました");
    }
  };

  const onSignUpClick = () => {
    navigate("/signUp")
  }

  return (
    <SSignInFrame>
      <SSignInRow>
        <SSignInLabel>
          <label htmlFor="id">ユーザー名</label>
        </SSignInLabel>
        <SSignInInput>
          <input
            id="id"
            value={userName}
            type="text"
            onChange={(evt) => setUserName(evt.target.value)}
          />
        </SSignInInput>
      </SSignInRow>
      <SSignInRow>
        <SSignInLabel>
          <label htmlFor="password">パスワード</label>
        </SSignInLabel>
        <SSignInInput>
          <input
            id="password"
            value={pass}
           type="password"
            onChange={(evt) => setPass(evt.target.value)}
          />
        </SSignInInput>
      </SSignInRow>
      <SSignInRow>
        <SLoginButton type="button" onClick={onSignInClick}>
          ログイン
        </SLoginButton>
      </SSignInRow>
      <SToSignUp onClick={onSignUpClick}>
        アカウント作成はこちら
      </SToSignUp>
    </SSignInFrame>
  );
}


const SSignInFrame = styled.div`
  background-color: #f8f8f8;
  margin: 80px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 8px 8px #aaaaaa;
`;

const SSignInRow = styled.div`
  dixplay: inline-block;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const SSignInLabel = styled.span`
  display: inline-block;
  width: 25%;
  vertical-align: top;
  text-align: right;
  margin-right: 4px;
`;

const SSignInInput = styled.span`
  display: inline-block;
  width: auto;
  vertical-align: top;
  margin-left: 4px;
`;
const SLoginButton = styled.button`
  background-color: #444444;
  color: #f0f0f0;
  padding: 4px 16px;
  border-radius: 8px;
`;

const SToSignUp = styled.a`
  color: #242323ff;
  font-size: .8rem;
  cursor: pointer;
  text-decoration:underline;
`