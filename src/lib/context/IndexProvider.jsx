import React, { useState } from 'react';
import { LoginDispatchContext, LoginStateContext } from './LoginContext';
import { useMemo } from 'react';

export const IndexProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(
    !!localStorage.getItem('username'),
  );
  const login = async (name, id) => {
    localStorage.setItem('username', name);
    localStorage.setItem('id', 'wlsdud6221@naver.com');
    setIsLogedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('id');
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
