import axios from "axios";
import { SignUpResponse } from "../types/Types";

//ユーザー情報を取得するAPI
const getUser = async (user_uuid: string, token: string) => {
  const url = `http://localhost:3000/user?user_uuid=${user_uuid}&token=${token}`;
  const res = await axios.get(url);
  return res.data;
};

//サインアップのAPI
export const sign_up = async (user_name: string, pass: string, mail: string): Promise<SignUpResponse> => {
  const url = `http://localhost:3000/user?user_name=${user_name}&password=${pass}&mail=${mail}`;
  const res = await axios.post(url);
  return res.data
};

export { getUser };