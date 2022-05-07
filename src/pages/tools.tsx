import {NextPageWithLayout} from 'next';

import {Rooket, Underline} from '~/constants/icons';
import {merchantstoots} from '~/constants/marchents';
import {Main, Meta, PageLayout} from '~/layouts';
import {Button} from '~/ui/Button';
import {NextLink} from '~/ui/NextLink';

const LandingPage: NextPageWithLayout = () => {
  return (
    <Main
      meta={
        <Meta
          title="Merchants Tools"
          description="StablesPay is a decentralized stablecoin platform that allows you to earn interest on your stablecoins."
        />
      }
    >
      <main>
        <section className="mx-auto mt-24 grid min-h-[500px] max-w-[1200px] gap-10 px-5  md:grid-cols-2">
          <div className="order-2 mx-auto flex flex-col space-y-6 md:order-[0]">
            <div className="mx-auto flex max-w-max flex-col items-center space-y-4 sm:mx-0">
              <h1 className="flex flex-col space-y-3 text-4xl font-semibold sm:text-6xl">
                <span className="uppercase text-primary1">Merchants </span>
                <span className="max-w-[10ch] uppercase text-primary4">
                  tools
                </span>
              </h1>
              <Underline className="w-[200px] self-start" />
            </div>
            <p className="max-w-[50ch] text-center text-sm sm:text-left sm:text-lg sm:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ridiculus hendrerit aenean quam rhoncus ac libero nunc netus.
              Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id
              aliquam i nteger felis donec magna bibendum.
            </p>

            <Button
              variant="outlined"
              className="h-12 w-[300px] max-w-full self-center rounded-2xl sm:self-start"
            >
              Get Started
            </Button>
          </div>
          <div className="relative order-1 mx-auto -mt-10">
            <img
              src="/assets/images/tools.png"
              width={500}
              height={500}
              className="object-contain"
              alt=""
            />
          </div>
        </section>
        <section className="mx-auto my-20 grid min-h-[500px] max-w-[1200px] gap-10 px-5  sm:grid-cols-2 lg:grid-cols-3">
          {merchantstoots.map((tool, i) => (
            <div
              key={i}
              className="mx-auto flex h-[500px] max-w-[360px] flex-col items-center justify-center rounded-lg p-[12px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-[80%] flex-col items-center justify-between">
                <div className="flex flex-col items-center space-y-3">
                  {<tool.icon />}
                  <h2 className="text-[20px] font-[500]">{tool.name}</h2>
                </div>
                <p className="text-center">{tool.description}</p>
                <NextLink
                  href={tool.url}
                  className="rounded-lg py-2 px-4 text-sm  font-semibold text-primary1 transition-all hover:bg-primary1/20"
                >
                  Find more
                </NextLink>
              </div>
            </div>
          ))}
        </section>
        <section className="relative mx-auto min-h-[500px] max-w-[1400px] md:h-[800px]">
          <div className="absolute inset-0 z-10  grid h-full grid-cols-12 grid-rows-6 justify-items-center md:mr-52 md:place-items-center">
            <div className="absolute mx-auto flex flex-col space-y-6 pt-10 md:pt-0 md:pb-20">
              <div className="mx-auto flex max-w-max flex-col items-center space-y-4 sm:mx-0">
                <h1 className="flex space-x-3 text-4xl font-semibold sm:text-6xl">
                  <span className="uppercase text-primary1">Need </span>
                  <span className="max-w-[10ch] uppercase text-primary4">
                    Help
                  </span>
                </h1>
              </div>
              <p className="max-w-[40ch] text-center text-sm sm:text-left sm:text-lg sm:leading-6">
                Store, send and receive over 4 Stable Coins in your StablePays
                wallet. Accept USDT, USDC and BUSD in more than 4 different
                Block Chain through the StablePays payment gateway.
              </p>

              <Button
                variant="primary"
                className="h-12 w-[300px] max-w-full self-center rounded-2xl sm:self-start"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="absolute  bottom-0 md:inset-x-0">
            <Rooket />
          </div>
        </section>
      </main>
    </Main>
  );
};

LandingPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default LandingPage;