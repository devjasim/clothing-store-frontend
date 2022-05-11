import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import cx from 'classnames';
import React from 'react';

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  label?: string;
};
export const CheckBox = ({label, ...rest}: CheckboxProps) => (
  <label className="flex items-center space-x-3">
    <CheckboxPrimitive.Root
      id="c1"
      defaultChecked
      className={cx(
        'flex h-5 w-5 items-center justify-center rounded-[6px]',
        'radix-state-checked:bg-primary1 border radix-state-unchecked:border-gray-300'
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator>
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.81501 0.188288C8.06166 0.43934 8.06166 0.846374 7.81501 1.09743L3.18344 5.81171C3.06499 5.93227 2.90435 6 2.73684 6C2.56934 6 2.40869 5.93227 2.29025 5.81171L0.184985 3.66885C-0.0616618 3.4178 -0.0616617 3.01077 0.184985 2.75972C0.431632 2.50867 0.831526 2.50867 1.07817 2.75972L2.73684 4.44801L6.92183 0.188289C7.16847 -0.0627628 7.56837 -0.0627629 7.81501 0.188288Z"
            fill="white"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <span>{label}</span>
  </label>
);
