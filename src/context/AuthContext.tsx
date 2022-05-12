import React from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = React.createContext<
  | {
      auth: {isAuthenticated: boolean; userName: string; email: string};
      setAuth: (user: string, useremail: string) => void;
    }
  | undefined
>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [username, setUserName] = React.useState('');
  const [useremail, setEmail] = React.useState('');
  const handleLogin = (userName: string, email: string) => {
    setIsAuthenticated(true);
    setUserName(userName);
    setEmail(email);
  };
  return (
    <AuthContext.Provider
      value={{
        auth: {
          isAuthenticated,
          username,
          useremail,
        },
        setAuth: handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
