import React, {useState} from 'react';

import {Menu} from '~/constants/icons';
import {mainMenuLinks} from '~/constants/links';

import {Button} from './Button';
import {NextLink} from './NextLink';

const MobileMenu = () => {
  return (
    <div className="absolute  inset-x-0 z-10 mt-[80px] h-screen space-y-7 bg-white lg:-top-[1000px]">
      <nav className="">
        <ul className="flex flex-col space-y-5">
          {mainMenuLinks.map((link, i) => (
            <li key={i} className="text-center text-sm text-gray-800">
              <NextLink href={link.href}>{link.label}</NextLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto flex max-w-[250px] flex-col space-y-3">
        <Button variant="primary" className="h-[40px] rounded-xl">
          Sign up
        </Button>
        <Button variant="ghost" className="h-[40px] rounded-xl">
          Login
        </Button>
      </div>
    </div>
  );
};

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Button
        variant="ghost"
        className="rounded-lg p-[2px] lg:hidden "
        onClick={() => setShowMenu(!showMenu)}
      >
        <Menu />
      </Button>

      {showMenu && <MobileMenu />}

      <div className="hidden grow grid-cols-[70%,30%] items-center justify-items-end  lg:grid">
        <nav className="">
          <ul className="flex space-x-5">
            {mainMenuLinks.map((link, i) => (
              <li key={i} className="text-center text-sm text-gray-800">
                <NextLink href={link.href}>{link.label}</NextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden space-x-3 sm:flex">
          <Button variant="ghost" className="h-[40px] w-[110px] rounded-full">
            Login
          </Button>
          <Button variant="primary" className="h-[40px] w-[110px] rounded-full">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};
