import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const[isSignInForm, setIsSignInForm] = useState(true);

    const toogleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/CA-en-20250217-TRIFECTA-perspective_2c0e88db-6864-4403-89d0-72e9d88cab6a_large.jpg'
        alt="background"/>
        </div>
        <form className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white opacity-80 bg-black'>
            <h1 className='text-3xl p-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&
            <input type='text' placeholder='Name' className='p-2 my-4 w-full bg-gray-700 rounded-md'></input>
            }
            <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700 rounded-md'></input>
            <input type='password' placeholder='Password' className='p-2 my-4 w-full  bg-gray-700 rounded-md'></input>
            {!isSignInForm &&
            <input type='password' placeholder='Re-enter Password' className='p-2 my-4 w-full bg-gray-700 rounded-md'></input>
            }
            <button className='bg-red-700 p-2 my-4 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p onClick={toogleSignIn} className='underline hover:cursor-pointer'>
                {isSignInForm ? "New to Netflix? SignUp Now" : "Existing user? SignIn Here"}
                </p>
        </form>
    </div>
  )
}

export default Login;