import * as TabsPrimitive from '@radix-ui/react-tabs';
import cx from 'classnames';
import React from 'react';

import {Account, Crypto, Password, Security} from '~/components/tabs/Settings';

interface Tab {
  title: string;
  value: string;
  tab: React.ReactNode;
}

const tabs: Tab[] = [
  {
    title: 'Account',
    value: 'tab1',
    tab: <Account />,
  },
  {
    title: 'Password',
    value: 'tab2',
    tab: <Password />,
  },
  {
    title: 'Security',
    value: 'tab3',
    tab: <Security />,
  },
  {
    title: 'Crypto',
    value: 'tab4',
    tab: <Crypto />,
  },
];

export const SettingsTabs = () => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List className="grid max-w-[500px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-0">
        {tabs.map(({title, value}) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={cx(
              'group border border-gray-300 py-2.5',
              'rounded-md sm:rounded-none sm:rounded-t-md',
              'border-b first:border-r last:border-l',
              'radix-state-active:border-gray-800 sm:radix-state-active:border-gray-400 sm:radix-state-active:border-b-[0] radix-state-active:text-primary1',
              'flex-1  px-2 sm:px-4 py-1.5'
            )}
          >
            <div className="flex items-center space-x-2">
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
