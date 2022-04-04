import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { AppState } from './AppState';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/home';
import NewPostPage from './pages/new-post';
import UserPage from './pages/user';

class App extends React.Component {
  
  render() {
    
    return (
      <BrowserRouter>
          <div className='app'>
            <Navbar />
            <main className='main'>
              <p>{AppState.nickname}</p>
              <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route path='/post' element={<NewPostPage user={AppState}/>} />
                <Route exact path='/user' element={<UserPage user={AppState}/>} />
              </Routes>
            </main>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
