import axios from 'axios';
import { SignInResponse} from '../types/Types';

//送信先を定義
const apiBaseUrl = process.env.REACT_APP_API_URL;

//サインインのAPI
export const signIn = async (userName: string, pass: string): Promise<SignInResponse> => {
  
  const url = `${apiBaseUrl}/auth?userName=${userName}&password=${pass}`;
  const res = await axios.get(url);

  return res.data
};
