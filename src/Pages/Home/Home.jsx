import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'

const Home = ({clickSideBar}) => {
  return (
    <div>
      <SideBar clickSideBar = {clickSideBar}/>
    </div>
  )
}

export default Home
