import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import BodyContent from './components/Bodycontent';

function App() {
  return (
    <div className="App">
      <div className='partition'>
        <Sidebar />
        <div className='App-content'>
          <Navbar />
          
          <BodyContent />
        </div>
      </div>
    </div>
  );
}

export default App;
