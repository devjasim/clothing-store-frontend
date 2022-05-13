import {motion} from 'framer-motion';
import {NextPage} from 'next';
import Link from 'next/link';
import React from 'react';

import {Main, Meta} from '../layouts';

export const ErrorPage: NextPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="404 error"
          description="Stable pay is a coin payment service"
        />
      }
    >
      <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-5">
        <img src="/assets/images/404.jpg" className="w-full max-w-[800px]" />

        <section className="relative hidden h-full lg:block">
          <div className="fixed top-[-28%] right-0 h-[320px] w-[320px] rounded-full bg-primary4  blur-[81px] 2xl:h-[430px] 2xl:w-[430px]" />
          <div className="fixed bottom-[-23%] right-0 h-[320px] w-[320px] rounded-full bg-primary1 blur-[81px]  2xl:h-[430px] 2xl:w-[430px]" />
        </section>
        <Link href="/">
          <motion.a
            whileHover={{
              scale: 0.9,
            }}
            className="cursor-pointer text-3xl"
          >
            Go back to home page
          </motion.a>
        </Link>
      </main>
    </Main>
  );
};

export default ErrorPage;
