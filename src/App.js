import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserLoggedInInformation= localStorage.getItem('IsLoggedIn');
     
    if(storedUserLoggedInInformation ==='1'){
      setIsLoggedIn(true);
    }
  },[]);
  const loginHandler = (email, password, collegeName) => {
        // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('IsLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isloggedIn');
    setIsLoggedIn(false);
    };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
