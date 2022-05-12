import * as SwitchPrimitive from '@radix-ui/react-switch';
import cx from 'classnames';
import React from 'react';

import {Moon, Sun} from '~/constants/icons';

export const ToggleThemButton = () => {
  return (
    <SwitchPrimitive.Root
      className={cx(
        'group',
        'radix-state-checked:bg-primary1',
        'radix-state-unchecked:bg-primary1',
        'relative inline-flex h-[24px] w-[44px] flex-shrink-0 cursor-pointer rounded-md border-2 border-transparent transition-colors duration-200 ease-in-out'
      )}
    >
      <span className="absolute">
        <Sun />
      </span>
      <SwitchPrimitive.Thumb
        className={cx(
          'group-radix-state-checked:translate-x-5',
          'group-radix-state-unchecked:translate-x-0',
          'pointer-events-none inline-block  h-[20px] w-[20px] transform rounded-md bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
        )}
      />
      <span className="absolute right-0">
        <Moon />
      </span>
    </SwitchPrimitive.Root>
  );
};
