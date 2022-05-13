import React from 'react';

import {Switch} from '~/ui/Switch';

export const Security = () => {
  return (
    <section className=" mt-10 dark:text-white">
      <div className="max-w-[601px] space-y-5">
        <h2 className="border-b">2-step verification</h2>
        <div>
          <p className="text-sm font-[500]">
            Select your 2-step verification method
          </p>
          <p className="text-sm">
            Your 2-step verification method is valid across all your Stablespay
            accounts
          </p>
        </div>
        <div className="mt-10 space-y-8">
          <div className="flex w-full flex-col items-center space-y-3 border border-gray-300 py-5 px-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <img src="/assets/images/2993690_authenticator_brand_brands_google_logo_icon 1.png" />
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-[500]">Authenticator</h3>
                <p>Install an authenticator app on your phone</p>
              </div>
              <Switch className="bg-[#5A657C]" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center space-y-3 border border-gray-300 py-5 px-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <img src="/assets/images/Messages.png" />
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-[500]">Text Message</h3>
                <p>Set phone number to recieve text message</p>
              </div>
              <Switch className="bg-[#5A657C]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
