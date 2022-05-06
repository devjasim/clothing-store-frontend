import Link from 'next/link';
import React from 'react';

type Props = React.ComponentProps<typeof Link> & {
  className?: string;
};

export const NextLink = ({children, className, ...rest}: Props) => {
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};
