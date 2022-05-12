import React from 'react';

type Props = {
  imgUrl: string;
};

export const Avatar = ({imgUrl}: Props) => {
  return (
    <div>
      <img
        src={imgUrl}
        alt=""
        className="h-[40px] w-[40px] rounded-full 2xl:h-[50px] 2xl:w-[50px]"
      />
    </div>
  );
};
