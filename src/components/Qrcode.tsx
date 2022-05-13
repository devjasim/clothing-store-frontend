import {useRouter} from 'next/router';
import {QRCodeSVG} from 'qrcode.react';
import React from 'react';
import Countdown from 'react-countdown';

import {Copy} from '~/constants/icons';

import {Button} from './ui/Button';

export const Qrcode = ({amount} : {amount : string}) => {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-[650px] space-y-4 dark:text-white">
      <div className="w-full rounded-lg border px-5 py-8 dark:border-white/70">
        <h2 className="text-2xl font-[500] dark:text-white">${amount}</h2>
        <div className="flex flex-col text-[#939393] dark:text-white/70">
          <span>Order number: 2612</span>
          <span>Name: Stablespay</span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center  space-y-8 rounded-lg border px-5 py-8 dark:border-white/70">
        <div className="flex flex-col items-center space-y-3">
          <QRCodeSVG value="stablespay.com/" />
          <div>
            <span>The QR Code is Expires in </span>
            <Countdown
              date={Date.now() + 359000}
              renderer={(props) => {
                if (props.completed) {
                  router.push('/dashboard');
                }
                return (
                  <span className="text-primary1">
                    {props.minutes} : {props.seconds}
                  </span>
                );
              }}
            />
          </div>
        </div>
        <div className="">
          <p>There are several payment methods.:</p>
          <ol>
            <li>1. To pay, scan this QR code through your mobile wallet.</li>
            <li>
              2. Send the specified amount. Do not forget to take into account
              the network commission.
            </li>
          </ol>
        </div>
        <div className="flex h-[45px] w-full items-center justify-between rounded-xl border px-3  dark:border-white/60">
          <span>Total</span>
          <div className="flex items-center space-x-5">
            <span>{amount}</span>
            <div className="border-l border-gray-500 pl-3 dark:border-white/60">
              <Button className="mt-2">
                <Copy />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex h-[45px] w-full items-center justify-between gap-3 rounded-xl border px-3  dark:border-white/60">
          <span>To</span>
          <div className="flex  items-center space-x-5 text-ellipsis">
            <span>bc1qcwyjjatlx0yh797 hdzfqaaa...............</span>
            <div className="border-l border-gray-500 pl-3 dark:border-white/60">
              <Button className="mt-2">
                <Copy />
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          className="h-[50px] w-full max-w-[400px] rounded-[20px]"
        >
          Pay with Stable Pay
        </Button>
      </div>
    </div>
  );
};
