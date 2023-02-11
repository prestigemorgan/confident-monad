import React, { useState, useEffect } from 'react';

const initialUser = {
  isAuthenticated: false,
  username: '',
};

const AuthContext = React.createContext(initialUser);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = username => {
    setUser({ isAuthenticated: true, username });
  };

  const logout = () => {
    setUser(initialUser);
    sessionStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
