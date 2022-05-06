import {SVGProps} from 'react';

export const PosIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M34.812 14H20.655A2.654 2.654 0 0 0 18 16.655V37.89a2.655 2.655 0 0 0 2.654 2.654h14.158a2.655 2.655 0 0 0 2.655-2.654V16.655A2.655 2.655 0 0 0 34.812 14Z"
        stroke="#348888"
        strokeWidth={1.797}
      />
      <path
        d="M21.54 17.54h12.387v8.848H21.54V17.54Z"
        stroke="#348888"
        strokeWidth={1.797}
        strokeLinejoin="round"
      />
      <path
        d="M26.849 29.927h1.77m-7.08 7.08h1.77-1.77Zm10.619 0h1.77-1.77Zm-5.31 0h1.77-1.77Zm-5.308-3.54h1.77-1.77Zm10.618 0h1.77-1.77Zm-5.31 0h1.77-1.77Zm-5.308-3.54h1.77-1.77Zm10.618 0h1.77-1.77Z"
        stroke="#348888"
        strokeWidth={1.797}
        strokeLinecap="round"
        strokeLinejoin="round"
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
        <feBlend in2="shape" result="effect1_innerShadow_76_209" />
      </filter>
    </defs>
  </svg>
);
