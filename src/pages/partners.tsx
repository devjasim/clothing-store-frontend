import {NextPageWithLayout} from 'next';

import {Underline} from '~/constants/icons';
import {partnersList} from '~/constants/partners';

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
      <main className="space-y-10 px-5">
        <section className="mx-auto mt-24 grid min-h-[500px] max-w-[1200px] gap-16 md:grid-cols-2">
          <div className="order-2 flex flex-col items-center  space-y-6 md:order-1">
            <div className="flex w-full flex-col items-center space-y-4 md:items-start">
              <h1 className="flex flex-col text-4xl font-semibold sm:text-6xl">
                <span className="uppercase text-primary1">StablePays</span>
                <span className="uppercase text-primary4">Partners</span>
              </h1>
              <Underline className="max-w-full" />
            </div>
            <p className="max-w-[55ch] text-center text-sm sm:text-left sm:text-lg sm:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ridiculus hendrerit aenean quam rhoncus ac libero nunc netus.
              Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id
              aliquam i nteger felis donec magna bibendum.
            </p>
          </div>
          <div className="relative order-1 mx-auto">
            <img
              src="/assets/images/partners.png"
              width={500}
              height={500}
              className="object-contain"
              alt=""
            />
          </div>
        </section>
        <section className="mx-auto grid min-h-[500px] max-w-[1200px] gap-10 pb-16  sm:grid-cols-2 lg:grid-cols-3">
          {partnersList.map((partner, index) => (
            <div
              key={index}
              className="mx-auto flex h-[500px] max-w-[360px] flex-col items-center justify-center rounded-lg p-[12px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-[80%] flex-col items-center justify-between">
                {<partner.icon />}
                <h2 className="text-[20px] font-[500]">{partner.name}</h2>
                <p className="text-center">{partner.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Main>
  );
};

PartnersPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default PartnersPage;
