import cx from 'classnames';
import React from 'react';

import {Eye, Gmail, User} from '~/constants/icons';
import {EyeClose} from '~/constants/icons/EyeClose';

import {Button} from './Button';

const variants = {
  firstName: {
    type: 'text',
    placeholder: 'First Name',
    icon: <User />,
  },
  lastName: {
    type: 'text',
    placeholder: 'Last Name',
    icon: <User />,
  },
  email: {
    type: 'email',
    placeholder: 'Email address',
    icon: <Gmail />,
  },
  password: {
    type: 'password',
    placeholder: 'Password',
    icon: <Eye />,
    icon2: <EyeClose />,
  },
  passwordConfirm: {
    type: 'password',
    placeholder: 'Retype Password',
    icon: <Eye />,
    icon2: <EyeClose />,
  },
};

type Props = React.ComponentProps<'input'> & {
  variant: Exclude<keyof typeof variants, 'password' | 'passwordConfirm'>;
};

export const TextField = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const {className, variant, ...rest} = props;
    const {icon, type, placeholder} = variants[variant];
    return (
      <div
        className={cx(
          'border border-[#CFD9E0] shadow-[inset_0px_2px_0px_rgba(231,235,238,0.2)] rounded-md h-[40px]',
          'flex items-center justify-between px-1'
        )}
      >
        <input
          className={cx(
            'h-full w-full bg-transparent max-w-full p-0  min-w-0 text-gray-900 dark:text-white pl-2 placeholder:text-[#414D63] dark:placeholder:text-white placeholder:font-[300]',
            className
          )}
          autoComplete="on"
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        <span className="flex h-full items-center border-l border-[#CFD9E0] px-[5px]">
          {icon}
        </span>
      </div>
    );
  }
);
TextField.displayName = 'textfield';

type PasswordProps = React.ComponentProps<'input'> & {
  value: string;
  variant: Exclude<keyof typeof variants, 'email' | 'firstName' | 'lastName'>;
  onChange: (value: string) => void;
};

export const PasswordField = ({
  value,
  onChange,
  className,
  variant,
  ...rest
}: PasswordProps) => {
  const {placeholder, icon, icon2} = variants[variant];
  const [show, setShow] = React.useState(false);
  const [type, setType] = React.useState<'password' | 'text'>('password');

  return (
    <div
      className={cx(
        'border  border-[#CFD9E0] shadow-[inset_0px_2px_0px_rgba(231,235,238,0.2)] rounded-md h-[40px]',
        'flex items-center justify-between px-1'
      )}
    >
      <input
        className={cx(
          'h-full  bg-transparent w-full  max-w-full p-0  min-w-0 text-gray-900 dark:text-white pl-2 placeholder:text-[#414D63] dark:placeholder:text-white placeholder:font-[300]',
          className
        )}
        autoComplete="new-password"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        {...rest}
      />
      <Button
        onClick={() => {
          setShow(!show);
          setType(show ? 'password' : 'text');
        }}
        type="button"
      >
        <span className="flex h-full items-center border-l border-[#CFD9E0] px-[5px]">
          {!show ? icon : icon2}
        </span>
      </Button>
    </div>
  );
};
