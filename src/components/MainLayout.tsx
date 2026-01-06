import SideBar from './SideBar';
import PostList from './PostList';
import { SBody, SContents, SSideBar } from '../styles/MainLayout';
export default function MainLayout() {
	return (
		<>
			<SBody>
				<SSideBar>
					<SideBar />
				</SSideBar>
				<SContents>
					<PostList />
				</SContents>
			</SBody>
		</>
	)
}