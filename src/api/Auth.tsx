import axios from 'axios';
import { SignInResponse} from '../types/Types';

//送信先を定義
const API_BASE_URL = process.env.REACT_APP_API_URL;

//サインインのAPI
export const sign_in = async (user_name: string, pass: string): Promise<SignInResponse> => {
  
  const url = `${API_BASE_URL}/auth?user_name=${user_name}&password=${pass}`;
  const res = await axios.get(url);

  return res.data
};
