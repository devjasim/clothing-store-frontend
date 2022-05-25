import React from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = React.createContext<
  | {
      auth: {userInfo: any};
      setAuth: (userData: any) => void;
    }
  | undefined
>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [userInfo, setUserInfo] = React.useState<any>();
  const handleLogin = (userData: any) => {
    setUserInfo(userData);
  };
  return (
    <AuthContext.Provider
      value={{
        auth: {
          userInfo: userInfo
        },
        setAuth: handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuths = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuths};
