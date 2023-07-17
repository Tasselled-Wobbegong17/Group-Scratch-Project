import React from 'react';
import { useState } from 'react';

// const db = {
//     username: 'honeymustard',
//     password: 'test'
// }

const LogIn = () => {

    const [logInSuccess, setLogInSuccess] = useState(false);
    const [logInAttempt, setLogInAttempt] = useState(false);
    const [name, setName] = useState('');
    const [newAcc, setNewAcc] = useState(false);

    const handleSubmit = (e, type) => {
        e.preventDefault();
        switch (type) {
            case 'create': {
                const { username, password } = document.forms[1];
                fetch('/user/signup',
                    {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({
                            username: username.value,
                            password: password.value
                        })
                    }
                )
                    .then((response) => {
                        if (response.status === 200) {
                            return response.json()
                        }
                        else {
                            return null;
                        }
                    })
                    .then((data) => {
                        if (data === null) {
                            setLogInSuccess(false)
                        }
                        else {
                            setLogInSuccess(true);
                            setName(username.value);
                        }
                        console.log(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                break;
            }
            case 'login': {
                const { username, password } = document.forms[0];
                setLogInAttempt(true);
                fetch('/user/login',
                    {
                        method: 'POST',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify({
                            username: username.value,
                            password: password.value
                        })
                    }
                )
                    .then((response) => {
                        if (response.status === 200) {
                            return response.json()
                        }
                        else {
                            return null;
                        }
                    })
                    .then((data) => {
                        if (data === null) {
                            setLogInSuccess(false)
                        }
                        else {
                            setLogInSuccess(true);
                            setName(username.value)
                        }
                        console.log(data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
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