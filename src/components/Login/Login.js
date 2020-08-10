import React from 'react';
import Auth, { useAuth } from './useAuth';

const Login = () => {
    const auth = useAuth();
    const handleSignIn = () =>{
        auth.signIn().
        then((res)=>{
            window.location.pathname = 'review';
            
        })
    }

    const handleSignOut = () =>{
        auth.signOut().
        then(()=>{
            window.location.pathname = '/';
            
        })
    }
    return (
        <div>
            <h1>This is login page</h1>
            
            {
                auth.user?<button onClick={handleSignOut}>Log Out</button>:<button onClick={handleSignIn}>Login</button>
            }

        </div>
    );
};

export default Login;