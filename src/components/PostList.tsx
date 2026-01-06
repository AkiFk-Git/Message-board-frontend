import { useContext, useEffect } from "react";

import Post from './Post';
import { PostListContext } from "../providers/PostListProvider";
import { UserContext } from "../providers/UserProvider";
import { del, edit, getList } from "../api/Post";
import { PostType } from "../types/Types";
import { SPostList } from "../styles/PostList";

export default function PostList() {
	const { postList, setPostList } = useContext(PostListContext);
	const { userInfo } = useContext(UserContext);
	
	// ポスト一覧を取得する関数
	const getPostList = async() => {
		const posts = await getList(userInfo.token);
		const postList: Array<PostType> = posts ? posts.map((p: PostType) => ({
				id: p.id,
				userUuid: p.userUuid,
				userName: p.userName,
				content: p.content,
				createdAt: new Date(p.createdAt),
		})):[]
	setPostList(postList);
	}

	//ポストを編集する関数
	const editPost = async(token:string, userUuid:string, postId:number, msg:string) =>{
		await edit(token, userUuid, postId, msg);
		getPostList()
	}

	//ポストを削除する関数
	const delPost = async(userUuid:string,token:string,postId:number) => {
		await del(userUuid,token,postId);
		getPostList()
	} 

	useEffect(() => {
		getPostList();
	}, []);

	return (
			<SPostList>
				<p>ポスト一覧</p>
				{postList.map((p) => (
					<Post 
					token={userInfo.token} 
					key={p.id}
					post={p} 
					userUuid={userInfo.userUuid} 
					delPost={delPost} 
					editPost={editPost}/>
				))}
			</SPostList>
	)
}
