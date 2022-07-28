import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc';
import LoginImg from '../images/4428861.jpg';
import lightImg from '../images/light.jpg';
import { response } from "express";

const Login =()=>{
    const responseGoogle=(response)=>{
        
    }
    return(
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
        <img src={lightImg} alt="" className="h-full w-full object-cover " />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">

            <div className="p-5">
                <div className="shadow-2xl">
                    <GoogleLogin
                    clientId=""
                    render={(renderProps)=>(
                        <button
                        type="button"
                        className="bg-mainColor flex justify-center items-center p-3 rounded-lg curs' outline-none"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        >
                            <FcGoogle className="mr-4"/>Sign in with Google
                        </button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy="Single_host_origin"
                    />
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}

export default Login