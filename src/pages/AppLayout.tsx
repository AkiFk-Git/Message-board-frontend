import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { UserProvider } from "../providers/UserProvider";
import Main from "./Main";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function AppLayout() {
    return(
        <UserProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/main" element={<Main />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
      </UserProvider>
    )
}