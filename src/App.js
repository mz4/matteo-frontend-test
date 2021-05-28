import React, { useState } from 'react';
import Postapp from './Postapp';
import ThemeContext from './context/Context';

const App = () => {
  const [status, setStatus] = useState('login');
  const setLogout = () => {
    setStatus('logout');
  }

  const setLogin = () => {
    setStatus('login');
  }

  return (
    <ThemeContext.Provider value={{ status, setLogout, setLogin }}>
      <Postapp />
    </ThemeContext.Provider>
  )
}

export default App;