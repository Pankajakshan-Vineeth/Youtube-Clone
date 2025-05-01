// src/App.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
  
  const [clickSideBar, setClickSideBar] = useState(true);

  return (
    <>
      <Navbar clickSideBar={clickSideBar} setClickSideBar={setClickSideBar} />
      <Routes>
        <Route path='/' element={<Home clickSideBar={clickSideBar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video clickSideBar={clickSideBar} />} />
      </Routes>
    </>
  );
};

export default App;
