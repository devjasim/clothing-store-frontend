import cx from 'classnames';

import {Eye, Gmail, User} from '~/constants/icons';

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
  },
  passwordConfirm: {
    type: 'password',
    placeholder: 'Retype Password',
    icon: <Eye />,
  },
};

type Props = React.ComponentProps<'input'> & {
  variant: keyof typeof variants;
};
export const TextInput = ({className, variant, ...rest}: Props) => {
  const {type, placeholder, icon} = variants[variant];
  return (
    <div
      className={cx(
        'border border-[#CFD9E0] shadow-[inset_0px_2px_0px_rgba(231,235,238,0.2)] rounded-md h-[40px]',
        'flex items-center justify-between px-1'
      )}
    >
      <input
        className={cx(
          'h-full w-full bg-transparent max-w-full p-0  min-w-0 text-gray-900 pl-2 placeholder:text-[#414D63] placeholder:font-[300]',
          className
        )}
        autoComplete="on"
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      <span className="flex h-full items-center border-l border-[#CFD9E0] px-[5px]">
        {icon}
      </span>
    </div>
  );
};
