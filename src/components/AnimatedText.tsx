import cx from 'classnames';
import {motion} from 'framer-motion';
import React, {ReactNode} from 'react';

const Wrapper = ({children, id}: {children: ReactNode; id: number}) => {
  return (
    <span
      className={cx({
        'text-primary1 uppercase': id === 0,
        'text-primary4 uppercase': id === 1,
      })}
    >
      {children}
    </span>
  );
};

type Props = {
  text: string;
  id: number;
};

export const AnimatedText = (props: Props) => {
  const itemsVariant = {
    hidden: {
      x: '-200%',
      transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85},
    },
    visible: {
      x: 0,
      transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75},
    },
  };

  const splitWords = props.text.split(' ');

  const words: any[] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }
  words.map((word) => {
    return word.push('\u00A0');
  });

  return (
    <span>
      {words.map((_word, index) => {
        return (
          <Wrapper id={props.id} key={index}>
            {words[index].flat().map((element: any, index2: any) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index2}
                >
                  <motion.span
                    style={{display: 'inline-block'}}
                    variants={itemsVariant}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </span>
  );
};
