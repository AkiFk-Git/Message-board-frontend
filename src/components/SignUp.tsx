import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { sign_up } from '../api/User';

export const SignUp = () => {
    const navigate = useNavigate(); 
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState(''); 
    const [mail, setMail] = useState('');
    //アカウント作成ボタンの処理
    const onSignUpClick = async() => {
      //アカウント作成をして結果を取得
      const res = await sign_up(userName, pass, mail);
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

const SSignUpFrame = styled.div`
  background-color: #f8f8f8;
  margin: 80px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 8px 8px #aaaaaa;
`;

const SSignUpRow = styled.div`
  dixplay: inline-block;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const SSignUpLabel = styled.span`
  display: inline-block;
  width: 25%;
  vertical-align: top;
  text-align: right;
  margin-right: 4px;
`;

const SSignUpInput = styled.span`
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

const SToSignIn = styled.a`
  color: #242323ff;
  font-size: .8rem;
  cursor: pointer;
  text-decoration:underline;
`