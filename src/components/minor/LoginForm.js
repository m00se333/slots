import React from 'react';

export const LoginForm = ({ handleSubmit, setUsernameRef, setPasswordRef }) => (  
    <div className="loginWrapper">
        <div className="loginBox">
            <form className="loginForm" action="">
                <input ref={setUsernameRef} type="text" placeholder="username" defaultValue="kitties@kit.com" />
                <input ref={setPasswordRef} type="text" placeholder="password" defaultValue="meowMeow3" />
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    </div>
);