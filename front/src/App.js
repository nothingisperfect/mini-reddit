import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import NewPostPage from './pages/new-post';
import UserPage from './pages/user';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <main className='main'>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/post' element={<NewPostPage/>} />
            <Route exact path='/user' element={<UserPage/>} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
