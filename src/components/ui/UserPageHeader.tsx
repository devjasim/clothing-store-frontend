import React from 'react';

import {Logout} from '~/constants/icons/Logout';
import {Settings} from '~/constants/icons/Settings';
import {useAuth} from '~/context/AuthContext';

import {Avatar} from './Avatar';
import DropdownMenu from './DropDownMenu';
import {Logo} from './Logo';
import {NextLink} from './NextLink';
import {ToggleThemButton} from './ToggleButton';

const dropdownMenuItems = [
  {
    label: 'Settings',
    icon: <Settings />,
    url: '/settings',
  },
  {
    label: 'Logout',
    icon: <Logout />,
    url: '/',
  },
];

export const Header = () => {
  const {
    auth: {userName},
  } = useAuth();
  return (
    <div className="relative h-[80px] shadow">
      <header className="mx-auto flex h-full max-w-[1400px] items-center justify-between  px-2 sm:px-5">
        <NextLink href="/" className="justify-self-start">
          <Logo />
        </NextLink>
        <div className="flex items-center sm:space-x-5">
          <ToggleThemButton />
          <div className="flex items-center space-x-2">
            <span className="hidden sm:block">
              {userName || 'Elizabeth Ragnarock'}
            </span>
            <DropdownMenu
              trigger={<Avatar imgUrl="/assets/images/profile.png" />}
              links={dropdownMenuItems}
            />
          </div>
        </div>
      </header>
    </div>
  );
};
