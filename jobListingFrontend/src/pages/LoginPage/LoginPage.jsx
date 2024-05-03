import React from 'react'
import authBG from "../../assets/images/auth.png";
import Login from '../../components/Login/Login';

export default function LoginPage() {
  return (
    
    <div style={{ display: "flex", maxHeight: "100vh", maxWidth: "100vw" }}>
    <Login />
    <div>
        <img
            src={authBG}
            style={{
                position: "absolute",
                maxHeight: "100vh",
                width: "50vw",
                zIndex: 0,
            }}
            alt="Register Cover"
        />
        <h1
            style={{            
                color: "white",
                position: "relative",
                zIndex: 1,
                left: "50%",
            }}
        >
            Your Personal Job Finder
        </h1>
    </div>
</div>
  )
}
