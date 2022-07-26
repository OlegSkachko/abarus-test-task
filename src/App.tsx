import React from 'react';
import MainPage from './components/MainPage/MainPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/:id" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
