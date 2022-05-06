import cx from 'classnames';
import React from 'react';

type Props = {
  variant?: 'primary' | 'ghost' | 'outlined';
};

type ButtonProps = Props & React.ComponentProps<'button'>;

export const Button = ({
  children,
  variant,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <button
        className={cx(
          'text-sm font-semibold transition-all',
          {
            'bg-primary1 text-white capitalize  hover:bg-primary1/80 active:bg-primary1/90':
              variant === 'primary',
            'text-primary1 hover:bg-primary1/10 active:bg-primary1/20':
              variant === 'ghost',
            'border-[1px] border-primary1 text-primary1 hover:bg-primary1 hover:text-white':
              variant === 'outlined',
          },
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
