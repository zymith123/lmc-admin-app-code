import logo from './logo.svg';
import './App.css';
import {HashRouter as Router} from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import {useState} from "react"
import { UserContext } from './UserContext'

function App() {
  const [value, setValue] = useState()

  return (
    <>
      <UserContext.Provider value={{value, setValue}}>
       <Router>
         <Routes>         
           <Route path="/" element={<Home />}/>
           <Route path="/user" element={<Users />}/>         
         </Routes>
       </Router>
     </UserContext.Provider>
    </>
  );
}

export default App;
