import {IconArrowLeft, IconArrowRight} from '@tabler/icons';
import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  enabled?: boolean;
};

export const PrevButton = ({enabled, onClick}: ButtonProps) => (
  <button
    className="absolute top-[70%] left-[5px] z-[1] flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full lg:left-[-20px]"
    onClick={onClick}
    disabled={!enabled}
  >
    <IconArrowLeft size="30px" className="stroke-[#939393] stroke-2" />
  </button>
);

export const NextButton = ({enabled, onClick}: ButtonProps) => (
  <button
    className="absolute top-[70%] right-[5px] z-[1] flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full lg:right-[-25px]"
    onClick={onClick}
    disabled={!enabled}
  >
    <IconArrowRight size="30px" className="stroke-[#939393] stroke-2" />
  </button>
);
