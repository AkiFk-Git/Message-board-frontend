import styled from 'styled-components';
import SideBar from './SideBar';
import PostList from './PostList';
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

const SBody = styled.div`
  width: 100%;
  height: calc(100vh - 32px);
  display: flex;
  flex-direction: row;
`;

const SSideBar = styled.div`
  border-right: 1px solid #222222;
  width: 30%;
  height: 100%;
`;

const SContents = styled.div`
  width: 100%;
  height: 100%;
`;