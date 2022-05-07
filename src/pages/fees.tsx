import {NextPageWithLayout} from 'next';

import {Main, Meta, PageLayout} from '../layouts';

const FeesPage: NextPageWithLayout = () => {
  return (
    <Main
      meta={
        <Meta
          title="Fees"
          description="StablesPay is a decentralized stablecoin platform that allows you to earn interest on your stablecoins."
        />
      }
    >
      <main>fees page</main>
    </Main>
  );
};

FeesPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default FeesPage;
