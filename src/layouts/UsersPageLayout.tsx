import {ThemeProvider} from 'next-themes';
import {ReactNode} from 'react';

import {Header} from '~/ui/UserPageHeader';

type Props = {
  children: ReactNode;
  header?: boolean;
};

export const UserPageLayout = ({children, header = true}: Props) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      <div className="grid min-h-screen w-screen max-w-full grid-rows-[auto,1fr] dark:bg-[#131328]">
        {header && <Header />}
        {children}
      </div>
    </ThemeProvider>
  );
};