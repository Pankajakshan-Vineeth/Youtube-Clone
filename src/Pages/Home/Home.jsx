import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'


const Home = ({clickSideBar}) => {
  return (
    <>
      <SideBar clickSideBar = {clickSideBar}/>
      <div className={` container ${clickSideBar? "" : 'large-container'}`}>
      <Feed/>
      </div>
    </>
  )
}

export default Home
