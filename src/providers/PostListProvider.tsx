import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";

// ポストを保持する型を定義
export type PostType = {
  id: number;
  userUuid: string;
  userName: string;
  content: string;
  createdAt: Date;
};

// PoviderのPropsを型定義
interface UserProviderProps {
  children: ReactNode;
}

//　PostListContextの定義
export const PostListContext = createContext(
  {} as {
    postList: PostType[]; 
    setPostList: Dispatch<SetStateAction<PostType[]>>;
  },
);
//　PostListProviderの定義
export const PostListProvider = (props: UserProviderProps) => {
  const { children } = props;
  const [postList, setPostList] = useState<PostType[]>([]);
  return (
    <PostListContext.Provider value={{ postList, setPostList }}>
      {children}
    </PostListContext.Provider>
  );
};