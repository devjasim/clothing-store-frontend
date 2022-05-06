import cx from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import React, {ReactNode, useCallback, useEffect, useState} from 'react';

import {NextButton, PrevButton} from './CarousalButtons';

type ButtonProps = React.ComponentProps<'button'> & {
  selected?: boolean;
  enabled?: boolean;
};

export const Dots = ({selected, onClick}: ButtonProps) => (
  <button
    className={cx(
      'bg-white transition-all cursor-pointer relative border-0 p-[3px] h-[15px] w-[15px] mx-[5px] flex justify-center rounded-full items-center',
      'after:bg-primary1/20 after:opacity-100 after:w-full after:h-full after:rounded-full after:content-[""]',
      {
        'after:rounded-full after:bg-primary1/90': selected,
      }
    )}
    type="button"
    onClick={onClick}
  />
);

type Props = {
  children: ReactNode;
};

export const Carousal = ({children}: Props) => {
  const [viewportRef, embla] = useEmblaCarousel({skipSnaps: false}, []);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList() as never[]);
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="relative  max-w-[300px] p-[10px] sm:max-w-full md:p-[20px]">
        <div className="w-full  overflow-x-hidden" ref={viewportRef}>
          <div className="grid  select-none auto-cols-[100%] grid-flow-col gap-[2%]">
            {children}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />

        <div className="absolute -bottom-9 flex w-full list-none justify-center">
          {scrollSnaps.map((_, index) => (
            <Dots
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
