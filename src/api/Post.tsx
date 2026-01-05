import axios from "axios";

//送信先を定義
const API_BASE_URL = process.env.REACT_APP_API_URL;

//一覧を取得するAPI
export const getList = async (token: string) => {
  const url = `${API_BASE_URL}/post?token=${token}&records=10`;
  const res = await axios.get(url);
  return res.data
};

//ポスト投稿をするAPI
export const post = async (user_uuid: string, token: string, msg: string) => {
  const data = {
    message: msg
  };
  const url = `${API_BASE_URL}/post?user_uuid=${user_uuid}&token=${token}`;
  await axios.post(url, data);
}

//選択ポストの編集をするAPI
export const edit = async (token:string, user_uuid:string, post_id:number, msg:string) => {
  const data = {
      message: msg
    };
  const url = `${API_BASE_URL}/post?user_uuid=${user_uuid}&token=${token}&post_id=${post_id}`;
  await axios.put(url,data)
}

//選択ポストを削除するAPI
export const del = async (user_uuid: string, token: string, post_id: number) => {
  const url = `${API_BASE_URL}/post?user_uuid=${user_uuid}&token=${token}&post_id=${post_id}`;
  await axios.delete(url);
}