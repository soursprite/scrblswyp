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

  }
  const getUser = () => {

  }
  return (
    <div className="App container">
        <div>
          <h1>scrblswyp</h1>
          <input placeholder="Username" onChange={e => setLoginUsername(e.target.value)} />
          <input placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
          <button className="btn btn-success" onClick={loginAccount}>Login</button>
          <button className="btn btn-danger" onClick={() => setShowModal(true)}>Create Account</button>
          {showModal && <RegisterModal setShowModal={setShowModal} />}

        </div>
        <Book />
    </div>
  );
}

export default App;
