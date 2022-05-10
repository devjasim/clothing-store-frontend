import {motion} from 'framer-motion';
import {NextPageWithLayout} from 'next';

import {fees} from '~/constants/fees';
import {Title} from '~/ui/Title';

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
      <main>
        <section className="mx-auto mt-24 grid min-h-[500px] max-w-[1200px] gap-10 px-5  md:grid-cols-2">
          <div className="order-2 mx-auto flex flex-col space-y-6 md:order-[0]">
            <Title title={['Merchants', 'tools']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ridiculus hendrerit aenean quam rhoncus ac libero nunc netus.
              Augue id faucibus libero, aliquam, eu purus vitae. Tincidunt id
              aliquam i nteger felis donec magna bibendum.
            </Title>
            <p className="max-w-[50ch] text-center text-sm sm:text-left sm:text-lg sm:leading-6"></p>
          </div>
          <div className="relative order-1 mx-auto -mt-10">
            <motion.img
              src="/assets/images/cloud.png"
              className="absolute -top-5 w-[100px] sm:-left-10 sm:top-0 sm:w-[200px]"
              initial={{y: 20}}
              animate={{y: -20}}
              transition={{repeat: Infinity, repeatType: 'mirror', duration: 2}}
            />
            <img
              src="/assets/images/fees.png"
              width={500}
              height={500}
              className="object-contain"
              alt=""
            />
          </div>
        </section>
        <section className="mx-auto my-20 grid min-h-[500px] max-w-[1200px] gap-10 px-5  sm:grid-cols-2 lg:grid-cols-3">
          {fees.map((fee, i) => (
            <div
              key={i}
              className="mx-auto flex h-[500px] max-w-[360px] flex-col items-center justify-center rounded-lg p-[12px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-[50%] flex-col items-center justify-between">
                <span className="text-4xl font-[500]">{fee.amount}</span>
                <div className="flex flex-col items-center space-y-5">
                  <h2 className="text-[20px] font-[500]">{fee.name}</h2>
                  <p className="text-center">{fee.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Main>
  );
};

FeesPage.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default FeesPage;
