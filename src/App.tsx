import './App.css';
import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn'; 
import Main from './pages/Main';
import { UserProvider } from "./providers/UserProvider";
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
