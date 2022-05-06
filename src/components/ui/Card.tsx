import React from 'react';

import {Underline} from '~/constants/icons';

import {Button} from './Button';

export type CardProps = {
  title: string;
  subtitle: string;
  benefits: string[];
  icon: any;
  color: string;
  gradient: any;
};

export const Card = ({
  icon,
  title,
  benefits,
  subtitle,
  color,
  gradient,
}: CardProps) => {
  return (
    <div className="w-full max-w-[580px]  text-white">
      <div className="ml-auto flex h-10 w-[70%] items-center justify-end pr-9  sm:justify-between">
        <h2 className="text-[28px] font-[500] text-gray-800">{title}</h2>
        <Underline className="hidden sm:block" color={color} width={200} />
      </div>
      <div
        style={{
          background: gradient,
        }}
        className="relative grid min-h-[250px]  rounded-b-3xl pt-5 shadow-[0px_-12px_37px_-22px_rgba(0,0,0,0.29)] sm:grid-cols-[30%,70%] md:grid-cols-1 lg:grid-cols-[30%,70%]"
      >
        <div className="absolute left-5 -top-16 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white sm:relative sm:-top-20 sm:h-[130px] sm:w-[130px] md:absolute md:-top-16 md:h-[100px] md:w-[100px] lg:relative lg:-top-20 lg:h-[130px] lg:w-[130px]">
          {icon()}
        </div>
        <div className="flex flex-col justify-between space-y-5 p-3 pt-10 sm:mt-0 sm:space-y-3">
          <h3 className="text-lg">{subtitle}</h3>
          <ul className="pl-4">
            {benefits.map((benefit, i) => (
              <li key={i} className="list-disc text-white">
                {benefit}
              </li>
            ))}
          </ul>
          <Button
            className="h-[50px] w-full rounded-xl uppercase sm:w-[300px]"
            style={{
              background: color,
            }}
          >
            Accept Crypto now
          </Button>
        </div>
      </div>
    </div>
  );
};
