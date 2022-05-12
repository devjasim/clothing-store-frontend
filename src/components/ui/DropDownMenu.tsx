import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import cx from 'classnames';
import React, {ReactNode} from 'react';

import {NextLink} from './NextLink';

type DropdownMenuProps = {
  label: string;
  icon?: ReactNode;
  url: string;
};

interface Props {
  trigger: any;
  links: DropdownMenuProps[];
}

const DropdownMenu = ({trigger, links}: Props) => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <div className="cursor-pointer">{trigger}</div>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={5}
          className={cx(
            'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
            'rounded-lg px-1.5 py-1 shadow-md w-40',
            'bg-white '
          )}
        >
          {links.map(({label, icon, url}, i) => (
            <DropdownMenuPrimitive.Item
              key={`${label}-${i}`}
              className={cx(
                'flex w-full justify-between cursor-default select-none items-center rounded-md px-2 py-2 outline-none',
                'text-gray-400 focus:bg-gray-50 '
              )}
            >
              <NextLink href={url} className="flex w-full justify-between">
                <span className="grow text-sm text-gray-700">{label}</span>
                <span>{icon}</span>
              </NextLink>
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default DropdownMenu;
