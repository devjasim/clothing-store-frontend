import React from 'react';

import {PaymentTable} from '~/components/PaymentTable';
import {Searchfield} from '~/ui/Searchfield';

export const Payment = () => {
  return (
    <section className="mx-auto w-full max-w-[1100px] space-y-5 px-5 dark:text-white">
      <div className="grid min-h-[130px] w-full items-center border border-gray-500/30 p-3 dark:border-white sm:flex-row">
        <div className="mx-auto w-[80%]">
          <Searchfield />
        </div>
      </div>
      <div className="space-y-3">
        <PaymentTable />
      </div>
    </section>
  );
};
