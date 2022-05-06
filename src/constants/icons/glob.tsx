import {SVGProps} from 'react';

export const GLobIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <rect x={0.5} width={55} height={55} rx={27.5} fill="#fff" />
      <path
        d="M40.695 8.41a1.41 1.41 0 0 1 0 1.976l-1.013 1.026c6.055 7.14 5.742 17.91-.94 24.674a17.783 17.783 0 0 1-11.311 5.269v2.85h3.221c.763 0 1.381.625 1.381 1.397A1.39 1.39 0 0 1 30.653 47h-9.206a1.39 1.39 0 0 1-1.38-1.398 1.39 1.39 0 0 1 1.38-1.398h3.222v-2.849a17.76 17.76 0 0 1-10.299-4.318l-1.013 1.026a1.37 1.37 0 0 1-1.953 0 1.41 1.41 0 0 1 0-1.977l1.302-1.318c.912-.924 2.33-.876 3.218-.07a15.032 15.032 0 0 0 10.12 3.915h.012a15.047 15.047 0 0 0 10.734-4.504c5.73-5.802 5.925-15.088.581-21.124-.796-.9-.843-2.334.07-3.258l1.301-1.318a1.369 1.369 0 0 1 1.953 0Z"
        fill="#348888"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 23.5C14 16.596 19.596 11 26.5 11S39 16.596 39 23.5 33.404 36 26.5 36 14 30.404 14 23.5Zm12.5-9.722c-5.37 0-9.722 4.353-9.722 9.722 0 .62.058 1.227.169 1.814a4.167 4.167 0 1 1 4.74 6.634 9.677 9.677 0 0 0 4.813 1.274c4.71 0 8.638-3.349 9.532-7.796A6.944 6.944 0 1 1 30.68 14.72a9.685 9.685 0 0 0-4.181-.941Zm-.463 7.87a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Zm-6.018 5.093a1.389 1.389 0 1 0 0 2.778 1.389 1.389 0 0 0 0-2.778Z"
        fill="#348888"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.5}
        y={0}
        width={55}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_76_193" />
      </filter>
    </defs>
  </svg>
);
