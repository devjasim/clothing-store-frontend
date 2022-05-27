import {IconUser} from '@tabler/icons';
import decode from 'jwt-decode';
import {useRouter} from 'next/router';
import React from 'react';

import {Settings} from '~/constants/icons/Settings';
import { useAuths } from '~/context/AuthContext';
import {notify} from '~/utils/notify';

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
    label: 'User',
    icon: <IconUser className="w-[25px] stroke-gray-600" />,
    url: '/user',
  },
];


export const Header = () => {
  const router = useRouter();
  const {auth: {userInfo}, setAuth} = useAuths();
  // @ts-ignore
  const logout = async() => {
    notify('User logout!', 'info');
    localStorage.removeItem('userToken');
    setAuth(undefined)
  };

  React.useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (token) {
      const decodeedToekn: any = decode(token);

      if (decodeedToekn.exp * 1000 < new Date().getTime()) {
        notify('Token expaired!', 'info');
        logout();
      }
    }
  }, [router.query.counter]);

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
              <span>{userInfo?.userName}</span>
            </div>
            <DropDownMenu
              triger={
                <Avatar
                  imgUrl={
                    userInfo?.avatar || '/assets/images/profile.png'
                  }
                />
              }
              logout={logout}
              links={dropdownMenuItems}
            />
          </div>
        </div>
      </header>
    </div>
  );
};
