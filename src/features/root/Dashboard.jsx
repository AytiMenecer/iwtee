import React from 'react'
import SideBar from './../navigation/SideBar'
import MainStyle from './main.module.css'

const Dashboard = () => {
  return (
    <div>
      <div className={MainStyle.container_dashboard}>
        <SideBar />
        <div className="container_dashboard_content">
          <h1>hello world</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard