import {motion} from 'framer-motion';

import {AnimatedText} from '~/components/AnimatedText';
import {Underline} from '~/constants/icons';

type Props = {
  title: [string, string];
  children: React.ReactNode;
};

export const Title = ({title, children}: Props) => {
  const placeholderText = [
    {text: title[0]},
    {
      text: title[1],
    },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={container}>
        <h1 className="flex flex-col text-center text-4xl font-semibold sm:text-6xl md:text-left">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} id={index} />;
          })}
        </h1>
      </motion.div>
      <Underline className={'max-w-full'} />

      <motion.p
        className="mt-10 max-w-[55ch] text-center text-sm sm:text-left sm:text-lg sm:leading-6"
        initial={{opacity: 0, y: 30}}
        animate={{
          opacity: 1,
          y: 0,
          transition: {duration: 0.9, delay: 2.5, type: 'tween'},
        }}
      >
        {children}
      </motion.p>
    </div>
  );
};
