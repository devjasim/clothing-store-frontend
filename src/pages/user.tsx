import {NextPageWithLayout} from 'next';
import React from 'react';
import {PaymentTabs} from '~/components/PaymentTabs';
import {Main, Meta, UserPageLayout} from '~/layouts';

const DashBoardpage: NextPageWithLayout = () => {
  return (
    <Main meta={<Meta title="Clothing Store" description="" />}>
      <main className="mx-auto mt-7 max-w-[1100px] px-3 transition-none sm:px-5">
        <div>
          User information
        </div>
      </main>
    </Main>
  );
};

DashBoardpage.getLayout = (page) => (
  <UserPageLayout>
    <div>{page}</div>
  </UserPageLayout>
);

export default DashBoardpage;
