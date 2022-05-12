import {NextPageWithLayout} from 'next';
import React from 'react';

import {SettingsTabs} from '~/components/SettingsTabs';

import {Main, Meta, UserPageLayout} from '../layouts';

const SettingsPage: NextPageWithLayout = () => {
  return (
    <Main meta={<Meta title="user settings" description="" />}>
      <main className="px-5">
        <div className="mx-auto my-10  min-h-[400px] max-w-[1100px] rounded-lg border border-gray-400 p-5 py-10 sm:px-10 md:px-20 lg:px-32">
          <SettingsTabs />
        </div>
      </main>
    </Main>
  );
};

SettingsPage.getLayout = (page) => {
  return <UserPageLayout>{page}</UserPageLayout>;
};

export default SettingsPage;
