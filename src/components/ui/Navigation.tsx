import cx from 'classnames';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

import {Menu, Settings} from '~/constants/icons';
import {mainMenuLinks} from '~/constants/links';

import {Button} from './Button';
import {NextLink} from './NextLink';
import { useAuths } from '~/context/AuthContext';
import { getUser } from '~/hooks/api';
import { notify } from '~/utils/notify';
import { decode } from 'punycode';
import { DropDownMenu } from './DropDownMenu';
import { Avatar } from './Avatar';
import { IconUser } from '@tabler/icons';
import { BiShoppingBag } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

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


export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const userAuths = useAuths();
  
  const getUserProfile = async() => {
    const token: string | null = localStorage.getItem('userToken');
    if(token) {
      const user = await getUser();
      if (user) {
        userAuths.setAuth(user.data.result);
      }
    }
  }

  React.useEffect(() => {
    getUserProfile();
  }, [router.query.counter]);

  const { auth: { userInfo }, setAuth} = useAuths();
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

  const cartItems = useSelector((state: any) => state.products);

  console.log("userinfo", userInfo);

  const handleCartClick = () => {
    if(!!userInfo) {
      router.push('/cart-items');
    } else {
      router.push('/login');
    }
  }

  return (
    <div>
      <Button
        variant="ghost"
        className="rounded-lg p-[2px] lg:hidden "
        onClick={() => setShowMenu(!showMenu)}
      >
        <Menu />
      </Button>

      {/* {showMenu && <MobileMenu setShowMenu={setShowMenu} />} */}

      <div className="hidden grow grid-cols-[70%,30%] items-center justify-items-end  lg:grid">
        <nav className="">
          <ul className="flex space-x-5">
                <li className={cx(
                    'text-center text-sm',
                    router.pathname === '/'
                      ? 'text-primary1'
                      : 'text-gray-800'
                  )}
                >
                  <NextLink href='/'>Home</NextLink>
                </li>
          </ul>
        </nav>

        <div className="flex items-center sm:space-x-5">
          <div className="relative cursor-pointer w-50 h-50" onClick={() => handleCartClick()}>
            <BiShoppingBag className="" fontSize={24} />
            <div className="absolute top-[-10px] right-[-10px] text-green-500 flex items-center justify-center w-[20px] h-[20px] rounded-full">{cartItems?.length}</div>
          </div>
          {!!userInfo ? (
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
          ) : (
            <div className="hidden space-x-3 sm:flex">
              <Button
                onClick={() => router.push('/login')}
                variant="ghost"
                className="h-[40px] w-[110px] rounded-full"
              >
                Login
              </Button>
              <Button
                variant="primary"
                className="h-[40px] w-[110px] rounded-full"
                onClick={() => router.push('/signup')}
              >
                Sign up
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
