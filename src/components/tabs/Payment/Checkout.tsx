import React from 'react';

import {Bitcoin, Bnb, Usdt} from '~/constants/tables';
import {Avatar} from '~/ui/Avatar';
import {Button} from '~/ui/Button';

const Logo = () => {
  return (
    <svg
      width="142"
      height="140"
      viewBox="0 0 142 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_176_4589)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81.319 1.0336L93.8434 0.852131C100.765 0.751836 106.459 6.32991 106.559 13.2518C106.659 20.1737 101.13 25.9144 94.208 26.0147L81.5816 26.1976C67.6848 26.399 56.5823 37.8279 56.7837 51.7248C56.9851 65.6217 68.414 76.7241 82.3108 76.5227L94.9372 76.3398C101.859 76.2395 107.552 81.8175 107.653 88.7394C107.753 95.6613 102.224 101.402 95.3018 101.502L82.6718 101.685C82.6718 101.685 82.6717 101.685 82.6717 101.685C82.6717 101.685 82.6717 101.685 82.6717 101.685C54.8783 102.087 32.0211 79.8827 31.6183 52.0893C31.2156 24.2955 53.4205 1.43773 81.2142 1.03501L81.319 1.0336Z"
          fill="url(#paint0_linear_176_4589)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90.9056 138.026L78.3871 138.208C71.4652 138.308 65.7719 132.73 65.6716 125.808C65.5713 118.886 71.1006 113.145 78.0225 113.045L90.6488 112.862C104.546 112.66 115.648 101.232 115.447 87.3347C115.245 73.4378 103.817 62.3354 89.9196 62.5368L77.2933 62.7197C70.3714 62.82 64.6781 57.2421 64.5778 50.3202C64.4775 43.3983 70.0068 37.6578 76.9287 37.5575L89.5528 37.3746C89.5529 37.3746 89.5529 37.3746 89.5529 37.3746C89.5529 37.3746 89.5529 37.3747 89.5529 37.3747C117.346 36.9724 140.204 59.1771 140.606 86.9706C141.009 114.764 118.804 137.622 91.0104 138.025L90.9056 138.026Z"
          fill="url(#paint1_linear_176_4589)"
        />
        <rect
          x="0.967773"
          y="139.329"
          width="25.2223"
          height="72.1669"
          transform="rotate(-90.8301 0.967773 139.329)"
          fill="url(#paint2_linear_176_4589)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.8779 51.6176C32.4062 51.0252 31.4404 51.334 31.4513 52.0912C31.8541 79.885 54.7118 102.09 82.5056 101.687L82.5095 101.687C82.5096 101.687 82.5096 101.687 82.5096 101.687C82.5096 101.687 82.5097 101.687 82.5097 101.687L95.1377 101.504C102.06 101.404 107.589 95.6632 107.489 88.7413C107.388 81.8194 101.695 76.2412 94.7731 76.3415L82.1468 76.5245C76.9114 76.6003 72.0263 75.0719 67.9598 72.3941C65.9105 71.0447 63.6774 69.9527 61.2825 69.419C49.885 66.8789 39.9246 60.4669 32.8779 51.6176Z"
          fill="url(#paint3_linear_176_4589)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M140.58 84.6541C140.626 85.4214 140.655 86.1934 140.666 86.9697C141.069 114.763 118.865 137.621 91.0712 138.024L91.0712 138.024L65.9082 138.389L65.5436 113.226L90.7084 112.861C97.2954 112.766 103.255 110.148 107.68 105.941C121.349 103.55 133.091 95.656 140.58 84.6541Z"
          fill="url(#paint4_linear_176_4589)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_176_4589"
          x1="70.0912"
          y1="101.868"
          x2="68.6329"
          y2="1.21731"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#348888" />
          <stop offset="1" stopColor="#22BABB" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_176_4589"
          x1="102.136"
          y1="37.1922"
          x2="103.595"
          y2="137.842"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#348888" />
          <stop offset="1" stopColor="#22BABB" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_176_4589"
          x1="13.5789"
          y1="139.329"
          x2="13.2361"
          y2="207.166"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#348888" />
          <stop offset="1" stopColor="#A3DDDD" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_176_4589"
          x1="69.9257"
          y1="101.87"
          x2="69.1853"
          y2="50.7717"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA7F08" />
          <stop offset="1" stopColor="#9CACFF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_176_4589"
          x1="103.652"
          y1="137.842"
          x2="102.889"
          y2="85.2003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA7F08" />
          <stop offset="1" stopColor="#F5DBC1" />
        </linearGradient>
        <clipPath id="clip0_176_4589">
          <rect
            width="140.796"
            height="138.659"
            fill="white"
            transform="translate(0.601562 0.670532)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CheckOut = () => {
  return (
    <section className="grid max-w-[900px] gap-3 px-3  dark:text-white sm:grid-cols-[30%,70%]">
      <div className="hidden flex-col items-center justify-center gap-3 rounded-lg border border-[#CFD9E0] sm:flex">
        <Logo />
        <span className="text-3xl dark:text-white">StablePay</span>
      </div>
      <div className="h-full">
        <div className="flex h-[100px] items-center space-x-3 rounded-lg border border-[#CFD9E0] px-3">
          <Avatar imgUrl="/assets/images/user.png" />
          <div>
            <h2 className="text-lg font-[500]">Patrick Enide</h2>
            <span className="relative -top-1 text-sm text-gray-500">
              Patrick@gmail.com
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="mt-10 space-y-7">
            <div className="flex items-center justify-between rounded-lg border border-gray-300 py-1.5 px-3">
              <span className="text-2xl font-[500]">Payment Method</span>
              <span className="text-primary1">59sec</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-300 py-1.5 px-3">
              <span className="text-2xl font-[500]">Total</span>
              <span className="text-sm font-[500] text-gray-500">$120,00</span>
            </div>
            <span className="text-sm text-gray-600">Express Checkout</span>
          </div>
          <Button variant="primary" className="h-[50px] w-full rounded-[20px]">
            Pay with Stable Pay
          </Button>
          <p className="text-sm text-gray-600">
            or select a cryptocurrency to pay with another wallet
          </p>
          <div className="flex w-full flex-wrap gap-3">
            <Button className="flex h-[45px] min-w-[150px] grow items-center justify-center gap-3 rounded-2xl border border-gray-300">
              <Bnb />
              BNB
            </Button>
            <Button className="flex h-[45px] min-w-[150px] grow items-center justify-center gap-3 rounded-2xl border border-gray-300">
              <Bitcoin />
              BTC
            </Button>
            <Button className="flex h-[45px] min-w-[150px] grow items-center justify-center gap-3 rounded-2xl border border-gray-300">
              <Usdt />
              USDT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
