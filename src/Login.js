import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
	const [ email, setemail ] = useState('');
    const [password, setpassword] = useState('');
    
    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // Succesfully created
            // console.log(auth);
            alert("Logged In succesfully");
            if (auth) {
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // Succesfully created
            // console.log(auth);
            alert("Created account succesfully");
            if (auth) {
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
					<h5>Password</h5>
					<input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Continue</button>
				</form>
				<p>By continuing, you agree to Amazon Clone Conditions of Use and Privacy Notice.</p>
			</div>
			<div className="login__createAccount">
				<h5>New to Amazon?</h5>

				<button type="submit" onClick={register} className="login__registerButton">Create your Amazon Account</button>
			</div>
		</div>
	);
}

export default Login;
