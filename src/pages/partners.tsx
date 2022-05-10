import {motion} from 'framer-motion';
import {NextPageWithLayout} from 'next';
import {AnimatedBox} from '~/components/Animatedbox';

import {partnersList} from '~/constants/partners';
import {Title} from '~/ui/Title';

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
          <div className="order-2 flex flex-col  space-y-6 md:order-1">
            <Title title={['StablePays', 'Partners']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ridiculus hendrerit aenean quam rhoncus ac libero nunc netus.
              Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id
              aliquam i nteger felis donec magna bibendum.
            </Title>
          </div>
          <div className="relative order-1 mx-auto">
            <img
              src="/assets/images/partners.png"
              width={500}
              height={500}
              className="object-contain"
              alt=""
            />
            <motion.img
              src="/assets/images/coin2.png"
              className="absolute right-20 bottom-0 w-[80px] sm:bottom-32 sm:w-[100px]"
              initial={{y: 20}}
              animate={{y: -20}}
              transition={{repeat: Infinity, repeatType: 'mirror', duration: 2}}
            />
          </div>
        </section>
        <section className="mx-auto grid min-h-[500px] max-w-[1200px] gap-10 pb-16  sm:grid-cols-2 lg:grid-cols-3">
          {partnersList.map((partner, index) => (
            <AnimatedBox>
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
            </AnimatedBox>
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
