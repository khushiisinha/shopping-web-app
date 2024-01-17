import React, { useState } from "react";
import Bg from "../assets/bg-13.jpg";
import loginBg from "../assets/bg-9.png";
import Login from "../components/Login";
import Signup from "../components/Signup";
function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div
      className="flex justify-items-start items-center"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        objectFit:"cover"
      }}
    >
      <div
        className="w-1/2 h-2/3   rounded-t-lg ml-20  flex justify-start pt-8 bg-orange-e-800"
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col w-full h-full">
          {!isSignup && isLogin && (
            <Login isLogin={setIsLogin} isSignup={setIsSignup} />
          )}
          {!isLogin && isSignup && (
            <Signup isLogin={setIsLogin} isSignup={setIsSignup} />
            
          )}
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
