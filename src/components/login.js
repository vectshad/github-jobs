import React from 'react';
import '../style/login.css';

function Login() {
    return (
        <div class="main">
            <p class="sign" align="center">Sign in</p>
            <form class="form1">
                <input class="un " type="text" align="center" placeholder="Username"/>
                <input class="pass" type="password" align="center" placeholder="Password"/>
                <a class="submit" align="center">Sign in</a>
            </form>
        </div>
    )
}

export default Login;