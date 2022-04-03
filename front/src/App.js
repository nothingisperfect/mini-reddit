import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import NewPostPage from './pages/new-post';
import UserPage from './pages/user';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loggedIn: !!localStorage.getItem('loggedIn'),
    };
  }
  
  logIn() {
    this.setState({ loggedIn: true });
    localStorage.setItem('loggedIn', 'yes');
  }
  
  logOut() {
    this.setState({ loggedIn: true });
    localStorage.removeItem('loggedIn');
  }
  
  render() {
    return (
      <div className='app'>
        <Navbar />
        <main className='main'>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/user' element={<UserPage/>} />
            <Route path='/post' element={<NewPostPage/>} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
