import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { PostListProvider } from "../providers/PostListProvider"; 
import { UserContext } from "../providers/UserProvider";
import MainLayout from '../components/MainLayout';

export default function Main() {

  const { userInfo } = useContext(UserContext);
  const loggedIn = (userInfo.token !== '');

    return(
      <PostListProvider>
        {loggedIn ? <MainLayout />:<Navigate replace to="/" />}
      </PostListProvider>
    )
}