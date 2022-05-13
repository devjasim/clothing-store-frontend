import React from 'react';

import {PaymentTable} from '~/components/PaymentTable';
import {paymentData} from '~/constants/tables';

export const Payment = () => {
  return (
    <section className="mx-auto w-full max-w-[1100px] space-y-5 px-5 dark:text-white">
      <div className="space-y-3">
        <PaymentTable data={paymentData} />
      </div>
    </section>
  );
};
