import {IconSearch} from '@tabler/icons';
import cx from 'classnames';
import React from 'react';

type Props = React.ComponentPropsWithoutRef<'input'>;
export const Searchfield = ({className, ...rest}: Props) => {
  return (
    <div>
      <div
        className={cx(
          'border bg-transparent border-[#CFD9E0] flex items-center px-2 space-x-3 rounded-md h-[44px]',
          className
        )}
      >
        <IconSearch className="stroke-gray-400" />
        <input className="h-full w-full bg-transparent" {...rest} />
      </div>
    </div>
  );
};
