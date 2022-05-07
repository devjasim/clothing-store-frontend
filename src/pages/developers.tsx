import {NextPageWithLayout} from 'next';

import {Underline} from '~/constants/icons';
import {integrations} from '~/constants/integrations';
import {NextLink} from '~/ui/NextLink';

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
      <main>
        <section className="mx-auto mt-24 grid min-h-[500px] max-w-[1200px] gap-10 px-5  md:grid-cols-2">
          <div className="order-2 mx-auto flex flex-col space-y-6 md:order-[0]">
            <div className="mx-auto flex max-w-max flex-col items-center space-y-4 md:mx-0">
              <h1 className="flex flex-col space-y-3 text-4xl font-semibold sm:text-6xl">
                <span className="uppercase text-primary1">developers</span>
                <span className="max-w-[10ch] uppercase text-primary4">
                  integration
                </span>
              </h1>
              <Underline className="w-full self-start" />
            </div>
            <p className="max-w-[50ch] text-center text-sm sm:text-lg sm:leading-6 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ridiculus hendrerit aenean quam rhoncus ac libero nunc netus.
              Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id
              aliquam i nteger felis donec magna bibendum.
            </p>
          </div>
          <div className="relative order-1 mx-auto">
            <img
              src="/assets/images/developers.png"
              width={500}
              height={500}
              className="object-contain"
              alt=""
            />
          </div>
        </section>

        <section className="mx-auto my-20 grid min-h-[500px] max-w-[1200px] gap-10 px-5  sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="mx-auto flex h-[500px] max-w-[360px] flex-col items-center justify-center rounded-lg p-[12px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-[80%] flex-col items-center justify-between">
                <div className="flex flex-col items-center space-y-3">
                  <img src={integration.icon} />
                  <h2 className="text-[20px] font-[500]">{integration.name}</h2>
                </div>
                <p className="text-center">{integration.description}</p>
                <NextLink
                  href={integration.url}
                  className="rounded-lg py-2 px-4 text-sm  font-semibold text-primary1 transition-all hover:bg-primary1/20"
                >
                  Find more
                </NextLink>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Main>
  );
};

DevelopersPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default DevelopersPage;
