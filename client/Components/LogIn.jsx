import React from 'react';
import { useState } from 'react';

const db = {
    username: 'test',
    password: 'test'
}

const LogIn = () => {

    const [logInSuccess, setLogInSuccess] = useState(false);
    const [logInAttempt, setLogInAttempt] = useState(false);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = document.forms[0];
        setLogInAttempt(true);

        if (db.username === username.value && db.password === password.value) {
            setLogInSuccess(true);
            setName(username.value)
        }
        else {
            setLogInSuccess(false);
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
    return (
        <div className=' top-header userLogin'>
            <form onSubmit={handleSubmit}>
                <input name="username" type="text" placeholder="username"></input>
                <input name="password" type="password" placeholder="password"></input>
                <input type='submit' value="login"></input>
            </form>
            {logInAttempt ? logInSuccess ? Success : Failure : <div></div>}
        </div>
    )
}


export default LogIn;