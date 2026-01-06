import axios from "axios";
import { promises } from "dns";
import { PostType } from "../types/Types";

//送信先を定義
const apiBaseUrl = process.env.REACT_APP_API_URL;

//一覧を取得するAPI
export const getList = async (token: string): Promise<Array<PostType>> => {
  const url = `${apiBaseUrl}/post?token=${token}&records=10`;
  const res = await axios.get(url);
  return res.data
};

//ポスト投稿をするAPI
export const post = async (userUuid: string, token: string, msg: string) => {
  const data = {
    message: msg
  };
  const url = `${apiBaseUrl}/post?userUuid=${userUuid}&token=${token}`;
  await axios.post(url, data);
}

//選択ポストの編集をするAPI
export const edit = async (token:string, userUuid:string, postId:number, msg:string) => {
  const data = {
      message: msg
    };
  const url = `${apiBaseUrl}/post?userUuid=${userUuid}&token=${token}&postId=${postId}`;
  return await axios.put(url,data)
}

//選択ポストを削除するAPI
export const del = async (userUuid: string, token: string, postId: number) => {
  const url = `${apiBaseUrl}/post?userUuid=${userUuid}&token=${token}&postId=${postId}`;
  await axios.delete(url);
}