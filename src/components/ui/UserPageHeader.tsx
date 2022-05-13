import {IconDashboard} from '@tabler/icons';
import React from 'react';

import {Logout} from '~/constants/icons/Logout';
import {Settings} from '~/constants/icons/Settings';
import {useAuth} from '~/hooks/useAuth';

import {Avatar} from './Avatar';
import {DropDownMenu} from './DropDownMenu';
import {Logo} from './Logo';
import {NextLink} from './NextLink';
import {ToggleTheme} from './ToggleButton';

const dropdownMenuItems = [
  {
    label: 'Settings',
    icon: <Settings />,
    url: '/settings',
  },
  {
    label: 'Dashboard',
    icon: <IconDashboard className="w-[25px] stroke-gray-600" />,
    url: '/dashboard',
  },
  {
    label: 'Logout',
    icon: <Logout />,
    url: '/',
  },
];

export const Header = () => {
  // @ts-ignore
  const [auth] = useAuth();

  return (
    <div className="relative h-[80px] shadow dark:shadow-[0px_1.99195px_3.98391px_rgba(255,255,255,0.25)]">
      <header className="mx-auto flex h-full max-w-[1400px] items-center justify-between  px-2 sm:px-5">
        <NextLink href="/" className="justify-self-start">
          <Logo />
        </NextLink>
        <div className="flex items-center sm:space-x-5">
          <ToggleTheme />
          <div className="flex items-center space-x-2">
            <div className="hidden sm:block">
              <span>{`${auth?.firstName} ${auth?.lastName}`}</span>
            </div>
            <DropDownMenu
              triger={
                <Avatar
                  imgUrl={auth?.profile || '/assets/images/profile.png'}
                />
              }
              links={dropdownMenuItems}
            />
          </div>
        </div>
      </header>
    </div>
  );
};
