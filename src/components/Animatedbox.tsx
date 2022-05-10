import {motion} from 'framer-motion';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export const AnimatedBox = ({children}: Props) => {
  return (
    <motion.div
      initial={{y: 100, opacity: 0.5}}
      viewport={{once: true}}
      whileInView={{
        y: 0,
        offset: 100,
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
