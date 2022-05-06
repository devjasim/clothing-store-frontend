import React from 'react';

import {Logo} from './Logo';
import {Navigation} from './Navigation';
import {NextLink} from './NextLink';

export const Header = () => {
  return (
    <div className="relative h-[80px] w-full shadow">
      <header className="mx-auto grid h-full max-w-[1350px] grid-cols-2 items-center  justify-items-end px-2 font-futura sm:px-5 lg:grid-cols-[20%,80%] lg:justify-items-stretch">
        <NextLink href="/" className="justify-self-start">
          <Logo />
        </NextLink>
        <Navigation />
      </header>
    </div>
  );
};
