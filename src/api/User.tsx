import axios from "axios";
import { SignUpResponse } from "../types/Types";

//送信先を定義
const apiBaseUrl = process.env.REACT_APP_API_URL;

//ユーザー情報を取得するAPI
const getUser = async (user_uuid: string, token: string) => {
  const url = `${apiBaseUrl}/user?user_uuid=${user_uuid}&token=${token}`;
  const res = await axios.get(url);
  return res.data;
};

//サインアップのAPI
export const sign_up = async (user_name: string, pass: string, mail: string): Promise<SignUpResponse> => {
  const url = `${apiBaseUrl}/user?user_name=${user_name}&password=${pass}&mail=${mail}`;
  const res = await axios.post(url);
  return res.data
};

export { getUser };