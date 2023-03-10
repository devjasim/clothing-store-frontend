import {Menu, Transition} from '@headlessui/react';
import {IconChevronDown} from '@tabler/icons';
import cx from 'classnames';
import { useRouter } from 'next/router';
import {Fragment, ReactNode} from 'react';

import {Logout} from '~/constants/icons';

import {NextLink} from './NextLink';

type Link = {
  label: string;
  icon: ReactNode;
  url: string;
};

type Props = {
  triger: ReactNode;
  links: Link[];
  logout: () => any;
};

export const DropDownMenu = ({links, triger, logout}: Props) => {
  const router = useRouter();
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        {({open}) => (
          <>
            <Menu.Button className="inline-flex items-center justify-center">
              {triger}
              <IconChevronDown
                className="hidden w-5 h-5 ml-2 -mr-1 text-primary1 hover:text-primary1/50 sm:block"
                aria-hidden="true"
              />
            </Menu.Button>
            {open && (
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-40 px-3 py-2 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-md rounded-ld ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {links.map((link, i) => (
                    <Menu.Item key={i}>
                      <NextLink
                        href={link.url}
                        onClick={() => {
                          link.label !== 'Logout' && logout();
                        }}
                        className={cx(
                          'flex justify-between  dark:text-gray-900 text-sm  py-2 px-1 hover:bg-gray-200/50 rounded-md'
                        )}
                      >
                        <span>{link.label}</span>
                        {link.icon}
                      </NextLink>
                    </Menu.Item>
                  ))}
                  <Menu.Item>
                    <NextLink
                      href=""
                      className={cx(
                        'flex justify-between  dark:text-gray-900 text-sm  py-2 px-1 hover:bg-gray-200/50 rounded-md'
                      )}
                    >
                      <span
                        onClick={async() => {
                          await logout();
                          setTimeout(() => {
                            router.push('/login');
                          }, 1000)
                        }}
                      >
                        Logout
                      </span>
                      <Logout />
                    </NextLink>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            )}
          </>
        )}
      </Menu>
    </div>
  );
};
