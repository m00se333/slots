import React from 'react';

export const LoginForm = ({ handleSubmit, setUsernameRef, setPasswordRef }) => (  
    <div className="loginWrapper">
        <div className="loginBox">
            <form className="loginForm" action="">
                <input ref={setUsernameRef} type="text" placeholder="username" defaultValue="kitty@email.com" />
                <input ref={setPasswordRef} type="text" placeholder="password" defaultValue="1337kitty" />
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    </div>
);