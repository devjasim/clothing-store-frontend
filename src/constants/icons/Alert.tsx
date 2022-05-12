import React, {SVGProps} from 'react';

export const Alert = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M9.5625 5.1875V11.1875H8.4375V5.1875H9.5625Z" fill="#348888" />
        <path d="M9.5625 14V12.5H8.4375V14H9.5625Z" fill="#348888" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.6875 9.5C1.6875 5.46142 4.96142 2.1875 9 2.1875C13.0386 2.1875 16.3125 5.46142 16.3125 9.5C16.3125 13.5386 13.0386 16.8125 9 16.8125C4.96142 16.8125 1.6875 13.5386 1.6875 9.5ZM9 3.3125C5.58274 3.3125 2.8125 6.08274 2.8125 9.5C2.8125 12.9172 5.58274 15.6875 9 15.6875C12.4172 15.6875 15.1875 12.9172 15.1875 9.5C15.1875 6.08274 12.4172 3.3125 9 3.3125Z"
          fill="#348888"
        />
      </svg>
    </div>
  );
};
