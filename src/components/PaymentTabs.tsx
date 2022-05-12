import * as TabsPrimitive from '@radix-ui/react-tabs';
import cx from 'classnames';
import React from 'react';

import {Balance, CheckOut, Invoice, Payment} from '~/components/tabs/Payment';
import {Cash, CheckoutIcon, InvoicesIcon, PieChart} from '~/constants/icons';

interface Tab {
  title: string;
  value: string;
  icon: React.ReactNode;
  tab: React.ReactNode;
}

const tabs: Tab[] = [
  {
    title: 'Balance',
    icon: <PieChart />,
    value: 'tab1',
    tab: <Balance />,
  },
  {
    title: 'Payments',
    value: 'tab2',
    icon: <Cash />,
    tab: <Payment />,
  },
  {
    title: 'Checkouts',
    value: 'tab3',
    icon: <CheckoutIcon />,
    tab: <CheckOut />,
  },
  {
    title: 'Invoices',
    value: 'tab4',
    icon: <InvoicesIcon />,
    tab: <Invoice />,
  },
];

export const PaymentTabs = () => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={cx(
          'grid grid-cols-2 justify-items-center gap-2 sm:grid-cols-4 w-full rounded-t-lg max-w-[690px] mx-auto'
        )}
      >
        {tabs.map(({title, value, icon}) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={cx(
              'group border-none max-w-max',
              'rounded-lg  hover:bg-[#22BABB12]',
              'border-b first:border-r last:border-l',
              'radix-state-active:bg-[#22BABB52] radix-state-active:text-primary1',
              'flex-1  px-2 sm:px-4 py-1.5'
            )}
          >
            <div className="flex items-center space-x-2">
              {icon}
              <span className={cx('text-sm font-medium', 'text-gray-700 ')}>
                {title}
              </span>
            </div>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({tab, value}) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={cx('rounded-b-lg bg-white py-7')}
        >
          {tab}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};
