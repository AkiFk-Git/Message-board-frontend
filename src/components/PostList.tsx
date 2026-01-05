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
				user_uuid: p.user_uuid,
				user_name: p.user_name,
				content: p.content,
				created_at: new Date(p.created_at),
			});
		});
		}
	setPostList(postList);
	}

	//ポストを編集する関数
	const editPost = async(token:string, user_uuid:string, post_id:number, msg:string) =>{
		const res = await edit(token, user_uuid, post_id, msg);
		getPostList()
	}

	//ポストを削除する関数
	const delPost = async(user_uuid:string,token:string,post_id:number) => {
		await del(user_uuid,token,post_id);
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
					user_uuid={userInfo.user_uuid} 
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