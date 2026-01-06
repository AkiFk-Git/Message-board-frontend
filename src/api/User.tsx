import axios from "axios";
import { getUserResponse, SignUpResponse } from "../types/Types";

//送信先を定義
const apiBaseUrl = process.env.REACT_APP_API_URL;

//ユーザー情報を取得するAPI
export const getUser = async (userUuid: string, token: string): Promise<getUserResponse> => {
  const url = `${apiBaseUrl}/user?userUuid=${userUuid}&token=${token}`;
  const res = await axios.get(url);
  return res.data;
};

//サインアップのAPI
export const signUp = async (userName: string, pass: string, mail: string): Promise<SignUpResponse> => {
  const url = `${apiBaseUrl}/user?userName=${userName}&password=${pass}&mail=${mail}`;
  const res = await axios.post(url);
  return res.data
};