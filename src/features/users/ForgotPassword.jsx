import React from 'react';
import loginStyles from './login.module.css';
import userIcon from './../images/User.svg';
import passwordIcon from './../images/Group_2.svg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import facebookIcon from "./../images/facebook-app-symbol_1.svg";
import googleIcon from "./../images/google_1.svg";
import appleIcon from "./../images/apple_1.svg";
import shapeIcon from "./../images/Shape.svg";

const ForgotPassword = () => {

  
  return (
    <div className={loginStyles.signIn_container} >
      <div className={loginStyles.content_container}>
        <h2 className={loginStyles.welcome_h2}>Forgot <br />Password?</h2>
        <div className={loginStyles.inputs_container}>
          <input placeholder="Enter your email address" className={loginStyles.input_container} type="text" />
          <img className={loginStyles.shape_icon} src={shapeIcon} alt="" />
        </div>
        <p className={loginStyles.register}><span className={loginStyles.r}>*</span> We will send you a message to set or reset your new password</p>
        
        <div className={loginStyles.for_next}>
          <h2>Send Code</h2>
          <button className={loginStyles.next_btn}><AiOutlineArrowRight /></button>
        </div>
        <div className={loginStyles.with_login} >
          <p className={loginStyles.sign_in_with}>sign in with</p>
          <button className={loginStyles.with_this}><img src={googleIcon} alt="" /></button>
          <button className={loginStyles.with_this}><img src={appleIcon} alt="" /> </button>
          <button className={loginStyles.with_this}><img src={facebookIcon} alt="" /> </button>
        </div>  
      </div>
    </div>
  )
}

export default ForgotPassword;