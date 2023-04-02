import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Dropdown from './components/dropdown/Dropdown';
import Header from './components/Header/Header';
import HomeScreen from './Screens/homescreen/HomeScreen';
import Rates from './Screens/Rates';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <HomeScreen />
          </>
        } 
        />
        <Route path='/rates' element={
          <>
            <Rates />
          </>
        } 
        />
    </Routes>
    </Router>

  )
}

export default App
