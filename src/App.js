import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";



function App() {
  const adminUser = {
    email: "bob123@mail.com",
    password: "bob123"
  }

  const[user, setUser] = useState({name:"", email:""});
  const[error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("logout");
  }

  return (
    <div><Navbar/>
    <div className="App">
      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm/>
      )}
    </div> </div>
  );
}

export default App;
