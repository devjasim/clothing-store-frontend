import {NextPageWithLayout} from 'next';

import {TestimonialCarousal} from '~/components/carousal';
import {cardsData} from '~/constants/cardsdata';
import {MistiBushi, Netflix, Underline, Youtube} from '~/constants/icons';
import {paymentPlatforms, stablepayBenefits} from '~/constants/landingpage';
import {Main, Meta, PageLayout} from '~/layouts';
import {Button} from '~/ui/Button';
import {Card} from '~/ui/Card';
import {NextLink} from '~/ui/NextLink';

const partners = [
  {
    totalPayment: '$10B+',
    description: 'Over $10 Billion In Crypto Payments Since 2013',
    icon: <Youtube />,
  },
  {
    totalPayment: '100k+',
    description: 'Serving 100,000+ Merchants Globally',
    icon: <MistiBushi />,
  },
  {
    totalPayment: '190+',
    description: 'Active Worldwide In 190+ Countries',
    icon: <Netflix />,
  },
];

const LandingPage: NextPageWithLayout = () => {
  return (
    <Main
      meta={
        <Meta
          title="StablesPay"
          description="StablesPay is a decentralized stablecoin platform that allows you to earn interest on your stablecoins."
        />
      }
    >
      <main>
        <section className="mx-auto mt-24 grid min-h-[500px] max-w-[1200px] px-5 md:grid-cols-2">
          <div className="relative  mx-auto">
            <img
              src="/assets/images/hero-image.png"
              width={500}
              height={500}
              className="object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <div className="flex w-full flex-col items-center space-y-4 md:items-start">
              <h1 className="flex flex-col text-center text-4xl font-semibold sm:text-6xl md:text-left">
                <span className="text-primary1">StablePays</span>
                <span className="text-primary4">Ease of Payment</span>
              </h1>
              <Underline className="max-w-full" />
            </div>
            <p className="max-w-[50ch] text-center  text-sm sm:text-lg sm:leading-6 md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ridiculus hendrerit aenean quam rhoncus ac libero nunc netus.
              Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id
              aliquam i nteger felis donec magna bibendum.
            </p>
            <Button
              variant="outlined"
              className="mx-auto h-12 w-[300px] max-w-full rounded-2xl sm:mx-0"
            >
              Get Started
            </Button>
          </div>
        </section>
        <section className="my-[100px] w-full sm:my-[50px]">
          <div className="relative h-max w-full">
            <div className="absolute items-stretch inset-0 top-10 hidden lg:flex">
              <div className="bg-white relative z-10 max-w-[1400px] mx-auto">
                <svg
                  viewBox="0 0 1440 244"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-contain grow h-full w-full mx-auto"
                >
                  <path
                    d="M0 30L720 244L1440 30V244L720 0L0 244V30Z"
                    fill="#22BABB"
                    fill-opacity="0.54"
                  />
                </svg>
              </div>
              <div className="bg-[#87d9da] grow h-[208px] mb-4 w-full  right-0 bottom-1 absolute" />
            </div>
            <div className="relative z-20 mx-auto grid px-2 max-w-[1400px] w-full justify-items-center items-center gap-10 lg:grid-cols-2">
              {cardsData.map((card, i) => (
                <Card key={i} {...card} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col items-center space-y-20 bg-[#F2F7F7] px-3 py-16">
          <h2 className="text-center text-[28px] font-[500] leading-9">
            The world&apos;s most Trusted Crypto Payments Partner
          </h2>
          <div className="grid  w-full max-w-[1000px] gap-10 md:grid-cols-3">
            {partners.map((partner, i) => (
              <div key={i} className="flex flex-col items-center space-y-12">
                <div className="flex flex-col items-center space-y-5">
                  <h3 className="text-4xl text-primary1">
                    {partner.totalPayment}
                  </h3>
                  <p className="max-w-[230px] text-center text-lg font-[500]">
                    {partner.description}
                  </p>
                </div>
                {partner.icon}
              </div>
            ))}
          </div>
        </section>
        <section className="flex w-full flex-col items-center space-y-10 px-3 py-16">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-center text-[28px] font-[500] leading-9">
              Manage Crypto like a Pro
            </h2>
            <Underline className="w-[250px] sm:w-[300px]" />
          </div>
          <div className="grid  w-full max-w-[1100px] gap-10 md:grid-cols-3">
            {stablepayBenefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                {<benefit.icon />}
                <div className="flex flex-col  items-center">
                  <h3 className="text-lg font-[500]">{benefit.title}</h3>
                  <p className="max-w-[230px] text-center  text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outlined"
            className="h-12 w-[300px] max-w-full rounded-2xl"
          >
            Get Started
          </Button>
        </section>
        <section className="flex w-full flex-col items-center space-y-10 bg-[#E8E8E8]  py-16">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-center text-[28px] font-[500] leading-9">
              What our Customers Say
            </h2>
            <Underline color="#FA7F08" className="w-[250px]  sm:w-[300px]" />
          </div>
          <div className="max-w-[700px]">
            <TestimonialCarousal />
          </div>
        </section>
        <section className="flex w-full flex-col items-center space-y-10 px-3 py-16">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-center text-[28px] font-[500] leading-9">
              Start Accepting Stables Coin Payment
            </h2>
            <Underline color="#FA7F08" className="w-[250px]  sm:w-[300px]" />
          </div>
          <p className="text-center text-lg">
            Set up StablesPay seamlessly on the most popular platforms
          </p>
          <div className="flex w-full max-w-[1100px] flex-auto flex-row flex-wrap justify-around justify-items-center  gap-5 lg:grid-cols-5">
            {paymentPlatforms.map((platform, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div>{<platform.icon />}</div>
                <span className="font-[500] sm:text-xl">{platform.name}</span>
              </div>
            ))}
          </div>
          <NextLink href="/">
            <span className="text-primary1 hover:underline">
              See all plug in
            </span>
          </NextLink>
          <Button
            variant="primary"
            className="h-12 w-[300px] max-w-full rounded-2xl"
          >
            Get Started
          </Button>
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
