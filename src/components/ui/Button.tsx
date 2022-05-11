import cx from 'classnames';
import {motion} from 'framer-motion';
import React from 'react';

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
          'text-sm font-semibold transition-all cursor-default',
          {
            'bg-primary1 text-white capitalize': variant === 'primary',
            'text-primary1 hover:bg-primary1/10 active:bg-primary1/20':
              variant === 'ghost',
            'border-[1px] border-primary1 text-primary1 hover:bg-primary1 hover:text-white':
              variant === 'outlined',
          },
          className
        )}
        {...rest}
        whileTap={{
          scale: 0.95,
          transition: {
            duration: 0.1,
          },
        }}
      >
        {children}
      </motion.button>
    </>
  );
};
