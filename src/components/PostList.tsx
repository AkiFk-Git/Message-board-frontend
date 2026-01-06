import { useContext, useEffect } from "react";
import styled from "styled-components";

import Post from './Post';
import { PostListContext, PostType } from "../providers/PostListProvider";
import { UserContext } from "../providers/UserProvider";
import { del, edit, getList } from "../api/Post";

export default function PostList() {
	const { postList, setPostList } = useContext(PostListContext);
	const { userInfo } = useContext(UserContext);
	
	// ポスト一覧を取得する関数
	const getPostList = async() => {
		const posts = await getList(userInfo.token);
		let postList: Array<PostType> = [];
		if (posts) {
			posts.forEach((p: any) => {
			postList.push({
				id: p.id,
				userUuid: p.userUuid,
				userName: p.userName,
				content: p.content,
				createdAt: new Date(p.createdAt),
			});
		});
		}
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
					key={p.id} post={p} 
					userUuid={userInfo.userUuid} 
					delPost={delPost} 
					editPost={editPost}/>
				))}
			</SPostList>
	)
}

const SPostList = styled.div`
  margin-top: 16px;
  height: 100%;
  overflow-y: scroll;
`;