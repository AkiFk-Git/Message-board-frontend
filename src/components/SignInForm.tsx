import { useState, useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { signIn } from '../api/Auth'; 
import { UserContext } from "../providers/UserProvider";
import { SLoginButton, SSignInFrame, SSignInInput, SSignInLabel, SSignInRow, SToSignUp } from '../styles/SigninForm';

export default function SignInForm() {
  const navigate = useNavigate(); 
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState(''); 
  const { setUserInfo } = useContext(UserContext);
  
  //ログインボタンの処理
  const onSignInClick = async() => {

      //サインイン処理をして結果を取得
    const res = await signIn(userName, pass);
    //認証結果ごとの処理
    if(!res){
      alert("認証に失敗しました")
    }else if(res.inp){
      alert("正しく入力されていません")
    }else if(res.user){
      alert("ユーザー名またはパスワードに誤りがあります")
    }else if(res.token&&res.userUuid) {
      navigate("/main");
      setUserInfo({
        userUuid: res.userUuid,
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