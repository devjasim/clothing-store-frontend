import React from 'react';

import {BalanceTable} from '~/components/BalanceTable';
import {Alert} from '~/constants/icons';
import {Button} from '~/ui/Button';
import {NextLink} from '~/ui/NextLink';

export const Balance = () => {
  return (
    <section className="max-w-[900px] space-y-5 dark:text-white">
      <div className="flex min-h-[130px] flex-col items-center justify-between space-y-5 border border-gray-500/30 py-3 px-2 dark:border-white/50 sm:flex-row sm:px-5">
        <div>
          <h2 className="text-3xl font-[500]">$150.00</h2>
          <div className="flex items-center space-x-2">
            <span>Available Balance</span>
            <NextLink
              href="#"
              className="flex items-center space-x-2 text-primary1"
            >
              <Alert />
              <span>Learn more</span>
            </NextLink>
          </div>
        </div>
        <Button
          variant="primary"
          className="h-[50px] w-full rounded-[20px] px-5 sm:w-max"
        >
          Withdraw
        </Button>
      </div>
      <div className="space-y-3">
        <div className="flex min-h-[70px] flex-col items-center justify-between space-y-5 border border-gray-500/30 py-3 px-2 dark:border-white/50 sm:flex-row sm:px-5">
          <BalanceTable />
        </div>
      </div>
    </section>
  );
};
