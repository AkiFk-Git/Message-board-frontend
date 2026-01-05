import axios from 'axios';
import { SignInResponse, SignUpResponse } from '../types/Types';

//サインインのAPI
export const sign_in = async (user_name: string, pass: string): Promise<SignInResponse> => {
  
  const url = `http://localhost:3000/auth?user_name=${user_name}&password=${pass}`;
  const res = await axios.get(url);
   
  return res.data
};
