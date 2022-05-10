import cx from 'classnames';
import {AnimatePresence, motion} from 'framer-motion';
import {useEffect, useState} from 'react';

export const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <AnimatePresence>
      {scrollPosition > 0 && (
        <motion.button
          onClick={scrollToTop}
          initial={{y: 100, opacity: 0}}
          animate={{y: 0, opacity: 1, transition: {duration: 0.6}}}
          exit={{y: 100, opacity: 0, transition: {duration: 0.6}}}
          whileHover={{
            scale: 1.2,
            transition: {duration: 0.2},
          }}
          whileTap={{scale: 1}}
          className={cx(
            'bg-primary1 z-30 w-[50px] h-[50px] rounded-full fixed right-0 bottom-0 mr-5 mb-5',
            'flex items-center justify-center'
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="11" x2="12" y2="5" />
            <line x1="6" y1="11" x2="12" y2="5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
