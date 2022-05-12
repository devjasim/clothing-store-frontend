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
        className="min-h-[50px] min-w-[50px] rounded-full"
      />
    </div>
  );
};
