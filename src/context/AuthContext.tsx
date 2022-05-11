import React from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = React.createContext<
  | {
      auth: boolean;
      setAuth: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <AuthContext.Provider
      value={{auth: isAuthenticated, setAuth: setIsAuthenticated}}
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
