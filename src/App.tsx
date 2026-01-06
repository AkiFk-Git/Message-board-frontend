import './App.css';
import { Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn'; 
import Main from './pages/Main';
import { UserProvider } from "./providers/UserProvider";
import SignUp from './pages/SignUp';
import AppLayout from './pages/AppLayout';


function App() {
  return (
    <div className="App">
      <AppLayout/>
    </div>
  );
}

export default App;
