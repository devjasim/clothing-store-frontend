import {SVGProps} from 'react';

export const AutoForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M34.4 14c-3.754 0-6.8 3.06-6.8 6.83 0 3.769 3.046 6.829 6.8 6.829s6.8-3.06 6.8-6.83S38.153 14 34.4 14Zm0 10.927a4.083 4.083 0 0 1-4.08-4.098 4.083 4.083 0 0 1 4.08-4.097c2.258 0 4.08 1.83 4.08 4.097a4.083 4.083 0 0 1-4.08 4.098Zm4.08 8.195h-2.72a3.947 3.947 0 0 0-2.543-3.688l-8.378-3.141H14v15.024h8.16V39.35L31.68 42l10.88-3.415V37.22a4.083 4.083 0 0 0-4.08-4.097Zm-19.04 5.463h-2.72v-9.56h2.72v9.56Zm12.2.56-9.48-2.609v-7.512h2.19l7.915 2.964c.462.178.775.629.775 1.134 0 0-2.72-.068-3.128-.205l-3.237-1.079-.857 2.595 3.237 1.08a6.738 6.738 0 0 0 2.149.34h7.276c.53 0 1.006.328 1.224.78l-8.065 2.512Z"
        fill="#348888"
      />
      <path
        d="M39.065 21.774a4.517 4.517 0 0 1-5.473 3.291 4.516 4.516 0 0 1-3.29-5.47 4.512 4.512 0 0 1 5.467-3.292 4.513 4.513 0 0 1 3.296 5.471Z"
        fill="#fff"
        stroke="#348888"
        strokeWidth={0.646}
      />
      <path
        d="m33.302 22.23.9-3.608-.9 3.609Zm.126-3.8 2.222.553c1.449.362 1.126 2.06-.418 1.675 1.692.422 1.52 2.433-.482 1.934l-2.026-.505.704-3.658Zm.356 1.868 1.418.353-1.418-.353Zm.675-1.612.193-.773-.193.773Zm-1.093 4.383.193-.774-.192.774Zm2.124-4.126.193-.773-.193.773Zm-1.092 4.383.193-.774-.193.774Z"
        fill="#fff"
      />
      <path
        d="m34.398 23.326.193-.774m-1.289-.321.9-3.609-.9 3.609Zm.126-3.802 2.222.554c1.449.362 1.126 2.06-.418 1.675 1.692.422 1.52 2.433-.482 1.934l-2.026-.505.704-3.658Zm.356 1.869 1.418.353-1.418-.353Zm.675-1.612.193-.773-.193.773Zm-1.093 4.383.193-.774-.192.774Zm2.124-4.126.193-.773-.193.773Z"
        stroke="#348888"
        strokeWidth={0.646}
        strokeLinecap="square"
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
        <feBlend in2="shape" result="effect1_innerShadow_76_228" />
      </filter>
    </defs>
  </svg>
);
