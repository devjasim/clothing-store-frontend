import {NextPageWithLayout} from 'next';

import {Main, Meta, PageLayout} from '../layouts';

const DevelopersPage: NextPageWithLayout = () => {
  return (
    <Main
      meta={
        <Meta
          title="Developers"
          description="StablesPay is a decentralized stablecoin platform that allows you to earn interest on your stablecoins."
        />
      }
    >
      <main>developers page</main>
    </Main>
  );
};

DevelopersPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default DevelopersPage;
