import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';

function App() {
  const state = useSelector((state) => state.user);
  const isLogin = state.access_token;
  const [showProfile, setShowProfile] = useState(isLogin);

  useEffect(() => {
    if (isLogin) {
      setTimeout(() => {
        setShowProfile(true);
      }, 3000); // 3 seconds delay
    } else {
      setShowProfile(false);
    }
  }, [isLogin]);

  return (
    <>
      {showProfile ? (
        <>
          <Profile />
          <Logout />
        </>

      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
