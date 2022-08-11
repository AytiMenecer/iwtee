import React from "react";
import navStyle from "./nav.module.css";
import profileImage from "./../images/profile_image.svg";
import hand from './../images/waving-hand_1f44b.png';

const SideBar = () => {
  
  
  
  return (
    <div className={navStyle.container_nav}>
      <div className={navStyle.container_nav_content}>
        <ul className={navStyle.ellipse_group}>
          <li className={navStyle.ellipse_item}></li>
          <li className={navStyle.ellipse_item}></li>
          <li className={navStyle.ellipse_item}></li>
        </ul>
        <div className={navStyle.hello_profile_container}>
          <div className={navStyle.hello_profile_image}>
            <img src={profileImage} alt="" />
          </div>
          <div className={navStyle.hello_user}>
            <p>Hello <img src={hand} alt="" /></p>
            <p className={navStyle.profile_userName}>Nail Ismayilov</p>
          </div>
        </div>
        <p className={navStyle.section_line}></p>
      </div>
    </div>
  );
};

export default SideBar;
