//　サーバーからの応答の型
//　サインイン
export type SignInResponse = {
  inp: boolean,
  user: boolean,
  userUuid: string; 
  token: string;
};
//　サインアップ
export type SignUpResponse = {
  inp: boolean;
  nameDup: boolean;
  mailDup: boolean;
}
//ユーザー情報取得
export type getUserResponse = {
  name: string;
  umail: string; 
}

// ポストの型を定義
export type PostType = {
  id: number;
  userUuid: string;
  userName: string;
  content: string;
  createdAt: Date;
};

// Post.tsx/Post関数のプロップスの型
export type PostProp = {
  token: string;
  key: number;
  post: any;
  userUuid: string;
  delPost: (userUuid:string,token:string,postId:number) => void;
  editPost: (token:string, userUuid:string, postId:number, msg:string) => void;
}

