import {Menu, Transition} from '@headlessui/react';
import {IconChevronDown} from '@tabler/icons';
import cx from 'classnames';
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
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        {({open}) => (
          <>
            <Menu.Button className="inline-flex items-center justify-center">
              {triger}
              <IconChevronDown
                className="ml-2 -mr-1 hidden h-5 w-5 text-primary1 hover:text-primary1/50 sm:block"
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
                <Menu.Items className="rounded-ld absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-lg bg-white px-3 py-2 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                        onClick={() => {
                          console.log('CLICK');
                          logout();
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
