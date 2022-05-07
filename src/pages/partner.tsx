import {NextPageWithLayout} from 'next';

import {Main, Meta, PageLayout} from '../layouts';

const PartnersPage: NextPageWithLayout = () => {
  return (
    <Main
      meta={
        <Meta
          title="Our Partners"
          description="StablesPay is a decentralized stablecoin platform that allows you to earn interest on your stablecoins."
        />
      }
    >
      <main>Our partners</main>
    </Main>
  );
};

PartnersPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default PartnersPage;
