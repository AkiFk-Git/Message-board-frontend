import { useState, createContext, Dispatch, SetStateAction } from "react";

// ポストを保持する型を定義
export type PostType = {
  id: number;
  user_uuid: string;
  user_name: string;
  content: string;
  created_at: Date;
};
//　PostListContextの定義
export const PostListContext = createContext(
  {} as {
    postList: PostType[]; 
    setPostList: Dispatch<SetStateAction<PostType[]>>;
  },
);
//　PostListProviderの定義
export const PostListProvider = (props: any) => {
  const { children } = props;
  const [postList, setPostList] = useState<PostType[]>([]);
  return (
    <PostListContext.Provider value={{ postList, setPostList }}>
      {children}
    </PostListContext.Provider>
  );
};