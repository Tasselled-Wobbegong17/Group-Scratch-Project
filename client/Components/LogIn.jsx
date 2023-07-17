import React from 'react';
import { useState } from 'react';

const db = {
    username: 'honeymustard',
    password: 'test'
}

const LogIn = () => {

    const [logInSuccess, setLogInSuccess] = useState(false);
    const [logInAttempt, setLogInAttempt] = useState(false);
    const [name, setName] = useState('');
    const [newAcc, setNewAcc] = useState(false);

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const { username, password } = document.forms[0];
        switch (type) {
            case 'create': {
                break;
            }
            case 'login': {
                setLogInAttempt(true);
                if (db.username === username.value && db.password === password.value) {
                    setLogInSuccess(true);
                    setName(username.value)
                }
                else {
                    setLogInSuccess(false);
                }
                break;
            }
            default:
                break;

        }
    }

    const Success = (
        <div>
            <p>Welcome back {name}</p>
        </div>
    )
    const Failure = (
        <div>
            <p>Incorrect username or password</p>
        </div>
    )
    const newAccForm = (
        <form className='new-account' onSubmit={(e) => handleSubmit(e, 'create')}>
            <input name="username" type="text" placeholder="username"></input>
            <input name="password" type="password" placeholder="password"></input>
            <input type='submit' value="Create Account"></input>
        </form>
    )
    return (
        <><div className=' top-header user-login'>
            <form onSubmit={(e) => handleSubmit(e, 'login')}>
                <input name="username" type="text" placeholder="username"></input>
                <input name="password" type="password" placeholder="password"></input>
                <input type='submit' value="login"></input>
            </form>
            <div>{newAcc ? <div></div> : <button onClick={() => { setNewAcc(true); setLogInAttempt(false); }}>Create New Account</button>}</div>
        </div>
            <div>{logInAttempt ? logInSuccess ? Success : Failure : <div></div>}</div>
            <div>{newAcc ? newAccForm : <div></div>}</div></>
    )
}


export default LogIn;