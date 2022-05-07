import {ReactNode} from 'react';

import {Footer} from '~/ui/Footer';
import {Header} from '~/ui/Header';
import {ScrollToTop} from '~/ui/ScrollTop';

type Props = {
  children: ReactNode;
};

export const PageLayout = ({children}: Props) => {
  return (
    <div className="grid min-h-screen w-screen max-w-full grid-rows-[auto,1fr,auto]">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};
