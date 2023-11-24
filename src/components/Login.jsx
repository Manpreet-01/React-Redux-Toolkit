import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginService } from '../services/services'
import { loginHandlerReducer } from '../features/user/userSlice';

function Login() {
    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    async function handleLogin() {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password) {
            try {
                setMessage('Signing in...');
                const userData = { email, password };
                const user = await loginService(userData);
                dispatch(loginHandlerReducer(user));
                if (user.error == 401) {
                    setMessage('Login Failed.');
                } else {
                    setMessage('Login successful.');
                }

            } catch (error) {
                let errMsg = error.message;
                if (error.message == 401) errMsg = "Wrong username or password";
                if (error.message == 'Failed to fetch') errMsg = "Network disconnected";

                setMessage(errMsg || 'An error occurred.');
                console.error(error.message);
            }
        } else {
            setMessage('Both Email and Password are required.');
        }
    }

    return (
        <>
            <div>Login Page</div>
            {message && <p>{message}</p>}
            {loading && <p>Loading...</p>}
            {!loading && message.includes('successful') && (
                <Redirecting />
            )}
            {!loading && !message.includes('successful') && (
                <>
                    <input ref={emailRef} type="text" placeholder="email" /> <br />
                    <input ref={passwordRef} type="text" placeholder="password" /> <br />
                    <button onClick={handleLogin}>Login here</button>
                </>
            )}
        </>
    );
}

function Redirecting() {
    const [countdown, setCountdown] = useState(3);

    const tick = () => {
        setCountdown(old => old - 1);
    }

    useEffect(() => {
        const intervalId = setInterval(tick, 1000);
        return () => {
            clearInterval(intervalId);
            console.log("redirecting countdown cleaned.");
        }
    }, []);

    return (
        <p>Redirecting to profile page in {countdown} seconds...</p>
    )
}
export default Login