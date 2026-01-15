import SideBar from './SideBar';
import PostList from './PostList';
import { SBody, SContents, SSideBar } from '../styles/MainLayout';
export default function MainLayout() {
  return (
    <>
      <SBody>
        <SideBar />
        <SContents>
          <PostList />
        </SContents>
      </SBody>
    </>
  );
}
