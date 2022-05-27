import {useRouter} from 'next/router';
import {ThemeProvider} from 'next-themes';
import React, {ReactNode} from 'react';

import {Header} from '~/ui/UserPageHeader';
import { useAuths } from '~/context/AuthContext';
import { getUser } from '~/hooks/api';

type Props = {
  children: ReactNode;
  header?: boolean;
};

export const UserPageLayout = ({children, header = true}: Props) => {
  const router = useRouter();

  React.useEffect(() => {
    const token: string | null = localStorage.getItem('userToken');
    if (router.pathname !== '/signup') {
      !token && router.push('/login');
    }
  }, [router.query.counter]);

  const userAuths = useAuths();
  
  const getUserProfile = async() => {
    const token: string | null = localStorage.getItem('userToken');
    if(token) {
      const user = await getUser();
      if (user) {
        userAuths.setAuth(user.data.result);
      }
    }
  }
  
  React.useEffect(() => {
    getUserProfile();
  }, [router.query.counter])

  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="grid min-h-screen w-screen max-w-full grid-rows-[auto,1fr] pb-36 dark:bg-[#131328]">
        {header && <Header />}
        {children}
      </div>
    </ThemeProvider>
  );
};
