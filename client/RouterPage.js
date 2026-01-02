import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Home from './Home';
import DetailPage from './DetailPage';

function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path='/detail/:id' element={<detailPage/>}/>
    </Routes>
  );
}

export default RouterPage