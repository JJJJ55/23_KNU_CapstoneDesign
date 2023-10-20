import React, { useState } from 'react';
import { LoginDispatchContext, LoginStateContext } from './LoginContext';
import { useMemo } from 'react';

export const IndexProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(
    !!localStorage.getItem('username'),
  );
  const login = async (name) => {
    localStorage.setItem('username', name);
    setIsLogedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setIsLogedIn(false);
  };

  const logdispatch = useMemo(() => ({ login, logout }), []);

  return (
    <LoginStateContext.Provider value={isLogedIn}>
      <LoginDispatchContext.Provider value={logdispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginStateContext.Provider>
  );
};
