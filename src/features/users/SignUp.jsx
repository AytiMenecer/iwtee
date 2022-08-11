import React from "react";
import loginStyles from "./login.module.css";
import userIcon from "./../images/User.svg";
import passwordIcon from "./../images/Group_2.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import facebookIcon from "./../images/facebook-app-symbol_1.svg";
import googleIcon from "./../images/google_1.svg";
import appleIcon from "./../images/apple_1.svg";

const SignUp = () => {
  return (
    <div className={loginStyles.signIn_container}>
      <div className={loginStyles.content_container}>
        <h2 className={loginStyles.welcome_h2}>
          Create an <br /> account
        </h2>
        <div className={loginStyles.inputs_container}>
          <input
            placeholder="Username and Email"
            className={loginStyles.input_container}
            type="text"
          />
          <img className={loginStyles.login_user_icon} src={userIcon} alt="" />
          <input
            placeholder="Password"
            className={loginStyles.input_container}
            type="password"
          />
          <img className={loginStyles.login_password_iconn} src={passwordIcon} />
          <input
            placeholder="Confirm Password"
            className={loginStyles.input_container}
            type="password"
          />
          <img className={loginStyles.login_password_icon} src={passwordIcon} />
        </div>
        <p className={loginStyles.register}>By clicking the <span className={loginStyles.r}>Register</span> button, you agree to the public offer</p>
        <div className={loginStyles.for_next}>
          <h2>Register</h2>
          <button className={loginStyles.next_btn}>
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className={loginStyles.with_login} >
          <p className={loginStyles.sign_in_with}>sign in with</p>
          <button className={loginStyles.with_this}><img src={googleIcon} alt="" /></button>
          <button className={loginStyles.with_this}><img src={appleIcon} alt="" /> </button>
          <button className={loginStyles.with_this}><img src={facebookIcon} alt="" /> </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
