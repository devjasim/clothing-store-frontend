import {IconUser} from '@tabler/icons';
import { useRouter } from 'next/router';
import React from 'react';

import {Settings} from '~/constants/icons/Settings';

import {Avatar} from './Avatar';
import {DropDownMenu} from './DropDownMenu';
import {Logo} from './Logo';
import {NextLink} from './NextLink';
import {ToggleTheme} from './ToggleButton';
import decode from 'jwt-decode';
import { notify } from '~/utils/notify';

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
  const [userProfile, setUserProfile] = React.useState<any>()
  const router = useRouter();
  // @ts-ignore
  const logout = () => {
    notify("User logout!", "info");
    localStorage.removeItem("userProfile");
    router.push("/login");
    setUserProfile(null);
  };


  React.useEffect(() => {
    const token = userProfile?.result?.token;

    if (token) {
      const decodeedToekn: any = decode(token);
      
      if (decodeedToekn.exp * 1000 < new Date().getTime()) {
        notify("Token expaired!", "info")
        logout();
      }
      
    }
    const data = localStorage.getItem('userProfile');
    if(data) {
      setUserProfile(JSON.parse(data))
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
              <span>{userProfile?.result?.userName}</span>
            </div>
            <DropDownMenu
              triger={
                <Avatar
                  imgUrl={userProfile?.result?.avatar || '/assets/images/profile.png'}
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
