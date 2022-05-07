import cx from 'classnames';
import React from 'react';
import {motion} from 'framer-motion';

type Props = {
  variant?: 'primary' | 'ghost' | 'outlined';
};

type ButtonProps = Props & React.ComponentProps<typeof motion.button>;

export const Button = ({
  children,
  variant,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <motion.button
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
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
      >
        {children}
      </motion.button>
    </>
  );
};
