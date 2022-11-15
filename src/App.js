import React, { useState } from "react";
import './App.css';
import { Book } from './components/Book';
import { RegisterModal } from "./RegisterModal";
import axios from 'axios';

function App() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [showModal, setShowModal] = useState(false);

  const loginAccount = () => {
    axios({
      method: "get",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "https://localhost:3000/login"
    })

  }
  const getUser = () => {
    console.log(res.user)

  }
  return (
    <div className="App container">
        <div className="d-flex flex-row justify-content-between">
          <h1>scrblswyp</h1>
          <div className="mt-2">
            <input placeholder="Username" className="mr-2" onChange={e => setLoginUsername(e.target.value)} />
            <input placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
            <button className="btn btn-success"  onClick={loginAccount}>Login</button>
            <button className="btn btn-danger" onClick={() => setShowModal(true)}>Create Account</button>
          </div>
          {showModal && <RegisterModal setShowModal={setShowModal} />}

        </div>
        <Book />
    </div>
  );
}

export default App;
