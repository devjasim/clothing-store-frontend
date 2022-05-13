import React, {useState} from 'react';

import {Usdt} from '~/constants/tables';
import {Searchfield} from '~/ui/Searchfield';
import {Switch} from '~/ui/Switch';

const SwitchGroup = () => {
  return (
    <div className="grid w-full  gap-2 pl-10">
      <div className="grid w-full grid-cols-2  gap-9">
        <span>ERC20</span>
        <div className="justify-self-end">
          <Switch className="bg-[#5A657C]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-9">
        <span>TRC20</span>
        <div className="justify-self-end">
          <Switch className="bg-primary1" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-9">
        <span>SOL</span>
        <div className="justify-self-end">
          <Switch className="bg-[#5A657C]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-9">
        <span>BSC</span>

        <div className="justify-self-end">
          <Switch className="bg-primary1" />
        </div>
      </div>
    </div>
  );
};

const Busd = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#F0B90B" />
      <path
        d="M12.3237 3.60004L14.5977 5.91296L8.87163 11.6L6.59766 9.34153L12.3237 3.60004Z"
        fill="white"
        stroke="#F0B90B"
        strokeWidth="0.833333"
      />
      <path
        d="M16.2149 6.60004L18.5977 9.02861L8.98043 18.6L6.59766 16.2286L16.2149 6.60004Z"
        fill="white"
        stroke="#F0B90B"
        strokeWidth="0.833333"
      />
      <path
        d="M5.59961 10.6L7.59961 12.6238L5.59961 14.6L3.59961 12.6238L5.59961 10.6Z"
        fill="white"
        stroke="#F0B90B"
        strokeWidth="0.833333"
      />
      <path
        d="M19.4154 10.6L21.5996 12.8262L12.7838 21.6L10.5996 19.4262L19.4154 10.6Z"
        fill="white"
        stroke="#F0B90B"
        strokeWidth="0.833333"
      />
    </svg>
  );
};

const Udsc = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 0C20.1801 0 26 5.81994 26 13C26 20.1801 20.1801 26 13 26C5.81994 26 0 20.1801 0 13C0 5.81994 5.81994 0 13 0ZM15.7235 4.5175C15.5252 4.42 15.327 4.5175 15.2783 4.71494C15.2287 4.7645 15.2287 4.81406 15.2287 4.91237V5.603L15.2368 5.6875C15.2792 5.85466 15.382 6.00022 15.5252 6.09619C19.3879 7.47744 21.3687 11.7674 19.9322 15.5642C19.1896 17.6361 17.5557 19.2132 15.5252 19.9534C15.327 20.0517 15.2287 20.1996 15.2287 20.4466V21.1372L15.2327 21.2087C15.2405 21.2867 15.2731 21.3602 15.3257 21.4183C15.3784 21.4763 15.4484 21.516 15.5252 21.5312C15.5748 21.5312 15.6739 21.5312 15.7235 21.4825C16.8379 21.1345 17.8725 20.5695 18.7676 19.82C19.6627 19.0705 20.4008 18.1513 20.9392 17.1155C21.4777 16.0796 21.8059 14.9474 21.905 13.7841C22.0041 12.6209 21.8721 11.4495 21.5166 10.3374C20.6261 7.52619 18.447 5.40556 15.7235 4.51831V4.5175ZM10.4748 4.46875C10.4252 4.46875 10.3261 4.46875 10.2765 4.5175C9.1621 4.86551 8.12755 5.43053 7.23241 6.18002C6.33727 6.9295 5.59922 7.84865 5.06077 8.88455C4.52232 9.92044 4.1941 11.0526 4.09501 12.2159C3.99591 13.3791 4.1279 14.5505 4.48338 15.6626C5.37388 18.4251 7.50344 20.5457 10.2765 21.4329C10.4747 21.5312 10.673 21.4329 10.7218 21.2355C10.7713 21.1868 10.7713 21.1364 10.7713 21.0381V20.3474L10.7632 20.2824C10.7291 20.1451 10.6015 19.9883 10.4748 19.9038C6.61212 18.5226 4.63125 14.2326 6.06775 10.4358C6.81037 8.36388 8.44431 6.78681 10.4748 6.04663C10.673 5.94831 10.7713 5.80044 10.7713 5.55344V4.86281L10.7673 4.79131C10.7595 4.71329 10.7269 4.63982 10.6743 4.58174C10.6216 4.52366 10.5516 4.48405 10.4748 4.46875ZM13.3469 7.033H12.6035L12.532 7.0395C12.3695 7.072 12.2509 7.21175 12.207 7.42788V8.56213L12.0388 8.58813C10.6511 8.83512 9.78169 9.79306 9.78169 10.9785C9.78169 12.6051 10.7713 13.2462 12.8513 13.4932C14.2383 13.7394 14.6835 14.0359 14.6835 14.8249C14.6835 15.613 13.9904 16.1558 13.0496 16.1558C11.7618 16.1558 11.3165 15.6138 11.1678 14.8736C11.1191 14.677 10.9696 14.5779 10.8209 14.5779H9.97913L9.91494 14.5836C9.83482 14.5965 9.76211 14.638 9.71027 14.7005C9.65843 14.7629 9.63098 14.8421 9.633 14.9232V14.9719L9.65981 15.1182C9.89544 16.2752 10.6884 17.1031 12.2574 17.3396V18.5234L12.2639 18.5949C12.2964 18.7558 12.4369 18.8744 12.6539 18.9174H13.3965L13.468 18.9109C13.6305 18.8784 13.7491 18.7387 13.793 18.5234V17.3388L13.9612 17.3062C15.353 17.0121 16.2687 16.0054 16.2687 14.7249C16.2687 12.9992 15.2287 12.4077 13.1487 12.1607C11.6626 11.9633 11.3661 11.5692 11.3661 10.8786C11.3661 10.1879 11.8617 9.74431 12.8513 9.74431C13.7426 9.74431 14.2382 10.0401 14.4852 10.7802C14.511 10.8518 14.558 10.9138 14.6201 10.9578C14.6821 11.0018 14.7561 11.0258 14.8322 11.0264H15.6244L15.6886 11.0216C15.769 11.0088 15.842 10.9672 15.894 10.9046C15.946 10.8419 15.9735 10.7625 15.9713 10.6811V10.6324L15.9413 10.4918C15.8193 9.98677 15.5411 9.53306 15.1464 9.19522C14.7517 8.85738 14.2604 8.65262 13.7426 8.61006V7.42788L13.7361 7.35637C13.7036 7.19469 13.5631 7.07606 13.3461 7.033H13.3469Z"
        fill="#0D7AC9"
      />
    </svg>
  );
};

export const Crypto = () => {
  const [query, setQuery] = useState('');
  return (
    <section className="mt-10 max-w-[700px] space-y-3 dark:text-white">
      <div className="max-w-[601px] space-y-5">
        <h2 className="border-b">Enable Crypto Currencies</h2>
        <div>
          <p className="text-sm font-[500]">
            SelectCryptocurrency which you can send or recieve
          </p>
          <p className="text-sm">
            Your Crypto enablement and disblement method is valid across all
            your Stablespay accounts
          </p>
        </div>
      </div>
      <div className="grid h-[80px] items-center rounded-sm border border-[#CFD9E0] px-3">
        <Searchfield
          placeholder=""
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mx-auto max-w-[500px]"
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-10 rounded-lg border border-[#CFD9E0] p-3 sm:flex-row sm:gap-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <Usdt />
            <span>USDT</span>
          </div>
          <Switch className="bg-primary1" />
        </div>
        <div className="mx-auto w-full border-none border-[#CFD9E0] sm:w-max  sm:border-l">
          <SwitchGroup />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 rounded-lg border border-[#CFD9E0] p-3 sm:flex-row sm:gap-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <Udsc />
            <span>USDC</span>
          </div>
          <Switch className="bg-primary1" />
        </div>
        <div className="mx-auto w-full border-none border-[#CFD9E0]  sm:w-max sm:border-l">
          <SwitchGroup />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 rounded-lg border border-[#CFD9E0] p-3 sm:flex-row sm:gap-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <Busd />
            <span>BUSD</span>
          </div>
          <Switch className="bg-primary1" />
        </div>
        <div className="mx-auto w-full border-none border-[#CFD9E0] sm:w-max sm:border-l">
          <SwitchGroup />
        </div>
      </div>
    </section>
  );
};
