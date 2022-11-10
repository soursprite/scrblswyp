import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css'

export const RegisterModal = ({ setShowModal }) => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const registerAccount = () => {
        axios({
            method: "post",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            withCredentials: true,
            url: "http://localhost:3000/register",
        }).then((res) => {
            console.log(res);
        })
    };

  return (
    <>
        <div className="darkModalBG" onClick={() => setShowModal(false)} />
        <div className="modalCentered">
            <div className="modalBox">
            <div className="modalHeader">
                <h2 className="heading">Register an Account</h2>
            </div>
            <button className="closeBtn" onClick={() => setShowModal(false)}>
                Close
            </button>
            <div className="modalContent">
                <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="name" className="form-control mb-2" onChange={e => setRegisterUsername(e.target.value)} id="username" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                    <label for="commentBody">Password</label>
                    <input type="password" className="form-control mb-2" onChange={e => setRegisterPassword(e.target.value)} id="password" placeholder="Enter Password" />
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <button type="submit" onClick={registerAccount} className="btn btn-primary">Create Account</button>
                    <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </>
  )
}
