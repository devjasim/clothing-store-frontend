import {motion} from 'framer-motion';
import {NextPageWithLayout} from 'next';

import {BUSD, USDC, USDT} from '~/constants/icons';
import {Main, Meta, PageLayout} from '~/layouts';
import {Title} from '~/ui/Title';

const blockchains = [
  {
    name: 'USDT',
    description:
      'Store, send and receive over 4 Stable Coins in your StablePays wallet. Accept USDT, USDC and BUSD in more than 4 different Block Chain ',
    icon: USDT,
  },
  {
    name: 'USDC',
    description:
      'Store, send and receive over 4 Stable Coins in your StablePays wallet. Accept USDT, USDC and BUSD in more than 4 different Block Chain ',
    icon: USDC,
  },
  {
    name: 'BUSD',
    description:
      'Store, send and receive over 4 Stable Coins in your StablePays wallet. Accept USDT, USDC and BUSD in more than 4 different Block Chain ',
    icon: BUSD,
  },
];

const SupportedBlockchains: NextPageWithLayout = () => {
  return (
    <Main
      meta={
        <Meta
          title="Supported Blockchains"
          description="List of supported blockchains and their corresponding tokens"
        />
      }
    >
      <main className="px-5">
        <section className="mx-auto mt-24 grid min-h-[500px] max-w-[1200px] gap-10  md:grid-cols-2">
          <div className="order-2 mx-auto space-y-6 md:order-[0]">
            <Title title={['4.00+', 'SUPPORTED COINS']}>
              Store, send and receive over 4 Stable Coins in your StablePays
              wallet. Accept USDT, USDC and BUSD in more than 4 different Block
              Chain through the StablePays payment gateway.
            </Title>
          </div>
          <div className="relative order-1 mx-auto -mt-10">
            <motion.img
              src="/assets/images/Speech_Bubble_1_.png"
              className="absolute right-[2.5rem] top-9 w-[50px] sm:right-[7rem] sm:w-[100px] md:right-[1rem] lg:right-[7rem]"
              initial={{y: 20}}
              animate={{y: -20}}
              transition={{repeat: Infinity, repeatType: 'mirror', duration: 2}}
            />
            <img
              src="/assets/images/blockchains.png"
              width={500}
              height={500}
              className="object-contain"
              alt=""
            />
          </div>
        </section>

        <section className="mx-auto my-16 flex max-w-[1200px] flex-auto flex-row flex-wrap justify-between gap-10">
          {blockchains.map((blockchain, i) => (
            <div
              key={i}
              className="mx-auto flex flex-col items-center space-y-3 sm:flex-[30%]"
            >
              <div className="flex flex-col items-center space-y-[17px]">
                {<blockchain.icon />}
                <h2 className="font-[500]">{blockchain.name}</h2>
              </div>
              <p className="max-w-[40ch] text-center">
                {blockchain.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </Main>
  );
};

SupportedBlockchains.getLayout = (page) => (
  <PageLayout>
    <div>{page}</div>
  </PageLayout>
);

export default SupportedBlockchains;
