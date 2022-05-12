import {ReactNode} from 'react';

import {Header} from '~/ui/UserPageHeader';

type Props = {
  children: ReactNode;
};

export const UserPageLayout = ({children}: Props) => {
  return (
    <div className="grid min-h-screen w-screen max-w-full grid-rows-[auto,1fr]">
      <Header />
      {children}
    </div>
  );
};
