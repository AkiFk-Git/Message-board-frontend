import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { signUp } from '../api/User';
import { SSignUpFrame, SSignUpInput, SSignUpLabel, SSignUpRow, SToSignIn } from '../styles/SignUpForm';
import { SLoginButton } from '../styles/SigninForm';

export const SignUpForm = () => {
    const navigate = useNavigate(); 
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState(''); 
    const [mail, setMail] = useState('');
    //アカウント作成ボタンの処理
    const onSignUpClick = async() => {
      //アカウント作成をして結果を取得
      const res = await signUp(userName, pass, mail);
      //登録結果ごとにアナウンス
      if(res.inp && res.nameDup && res.mailDup){
          alert("アカウントが作成されました")
          navigate("/")
      }else if(!res.inp){
          alert("入力形式に誤りがあります")
      }else if(!res.nameDup){
        alert("既に使われているユーザー名です")
      }else {
        alert("既に使われているメールアドレスです")
      }
    }
    //サインインページへの遷移
    const onSignInClick = () => {
        navigate("/")
    }

    return(<SSignUpFrame>
      <SSignUpRow>
        <SSignUpLabel>
          <label htmlFor="id">ユーザー名</label>
        </SSignUpLabel>
        <SSignUpInput>
          <input
            id="id"
            value={userName}
            type="text"
            onChange={(evt) => setUserName(evt.target.value)}
          />
        </SSignUpInput>
      </SSignUpRow>
      <SSignUpRow>
        <SSignUpLabel>
          <label htmlFor="password">パスワード</label>
        </SSignUpLabel>
        <SSignUpInput>
          <input
            id="password"
            value={pass}
           type="password"
            onChange={(evt) => setPass(evt.target.value)}
          />
        </SSignUpInput>
      </SSignUpRow>
      <SSignUpRow>
        <SSignUpLabel>
          <label htmlFor="mail">メールアドレス</label>
        </SSignUpLabel>
        <SSignUpInput>
          <input
            id="mail"
            value={mail}
           type="text"
            onChange={(evt) => setMail(evt.target.value)}
          />
        </SSignUpInput>
      </SSignUpRow>
      <SSignUpRow>
        <SLoginButton type="button" onClick={onSignUpClick}>
          アカウント作成
        </SLoginButton>
      </SSignUpRow>
      <SToSignIn onClick={onSignInClick}>
        ログインはこちら
      </SToSignIn>
     </SSignUpFrame>)
}