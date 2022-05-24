import { useRouter } from 'next/router';
import {ReactNode} from 'react';

import {Footer} from '~/ui/Footer';
import {Header} from '~/ui/Header';
import {ScrollToTop} from '~/ui/ScrollTop';
import React from 'react';

type Props = {
  children: ReactNode;
};

export const PageLayout = ({children}: Props) => {
  const router = useRouter();
  React.useEffect(() => {
    const data: any = localStorage.getItem("userProfile");
    if(data !== null) {
      router.push("/user")
    }
  }, [router.query.counter])
  return (
    <div className="grid min-h-screen w-screen max-w-full grid-rows-[auto,1fr,auto] dark:bg-white">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};
