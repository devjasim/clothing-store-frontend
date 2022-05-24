import {ThemeProvider} from 'next-themes';
import {useRouter} from 'next/router';
import React, {ReactNode} from 'react';

import {Header} from '~/ui/UserPageHeader';

type Props = {
  children: ReactNode;
  header?: boolean;
};

export const UserPageLayout = ({children, header = true}: Props) => {
  const router = useRouter();

  React.useEffect(() => {
    const data: any = localStorage.getItem("userProfile");
    if(router.pathname !== '/signup') {
      !data && router.push('/login');
    }
  }, [router.query.counter]);

  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="grid min-h-screen w-screen max-w-full grid-rows-[auto,1fr] pb-36 dark:bg-[#131328]">
        {header && <Header />}
        {children}
      </div>
    </ThemeProvider>
  );
};
