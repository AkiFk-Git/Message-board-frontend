//　サーバーからの応答の型を定義
//　サインイン
export type SignInResponse = {
  inp: boolean,
  user: boolean,
  user_uuid: string; 
  token: string;
};
//　サインアップ
export type SignUpResponse = {
  inp: boolean;
  nameDup: boolean;
  mailDup: boolean;
}

