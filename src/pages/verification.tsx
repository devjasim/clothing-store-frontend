import {NextPageWithLayout} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import Countdown from 'react-countdown';
import ReactCodeInput from 'react-verification-input';

import {useAuth} from '~/context/AuthContext';
import {Button} from '~/ui/Button';
import {Logo} from '~/ui/Logo';

import {UserPageLayout} from '../layouts';

const hideGmail = (email: string) => {
  const [first, ...rest] = email.split('@');
  return `${first!.replace(/./g, '*')}@${rest.join('@')}`;
};

const VerificationPage: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    auth: {email},
  } = useAuth();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/user');
  };

  return (
    <main className="mx-auto grid min-h-screen w-full max-w-[1400px] gap-20 px-5 lg:grid-cols-[60%,30%]">
      <section>
        <button onClick={() => router.push('/')}>
          <Logo width={200} height={90} />
        </button>
        <div className="mx-auto mt-10  max-w-[530px] space-y-8">
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-center text-3xl font-[500]">
              Enter Verification Code
            </h2>
            <p className="max-w-[50ch] text-center">
              A verification message has been sent to you on {hideGmail(email)}
              click on the link or inpute 6 Digit code to verify account
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="mx-auto max-w-[500px]">
              <ReactCodeInput
                removeDefaultStyles
                validChars="1234567890"
                classNames={{
                  container:
                    'h-[50px] text-center cursor-text flex gap-1 sm:gap-10',
                  character:
                    'leading-[50px] bg-slate-500/30  font-[36px] text-black border-gray-100 rounded-[8px] dark:text-white',
                  characterInactive: 'bg-slate-500/20',
                  characterSelected: 'ring',
                }}
              />
            </div>
            <div className="mx-auto  mt-5 text-center text-primary1">
              <span className="mr-1">Resend Code in</span>
              <Countdown
                date={Date.now() + 59000}
                renderer={(props) => {
                  return <span>{props.seconds}</span>;
                }}
              />
            </div>
            <div className="space-y-[30px] pt-7">
              <Button
                variant="primary"
                className="h-[50px] w-full rounded-3xl"
                type="submit"
              >
                Verify Code
              </Button>
              <Button
                type="button"
                className="flex h-[50px] w-full items-center justify-center space-x-3 rounded-3xl border border-[#CFD9E0]"
              >
                Change means of Verification
              </Button>
            </div>
          </form>
        </div>
      </section>
      <section className="relative hidden h-full lg:block">
        <div className="fixed top-[-28%] right-0 h-[320px] w-[320px] rounded-full bg-primary4  blur-[81px] 2xl:h-[430px] 2xl:w-[430px]" />
        <div className="fixed bottom-[-23%] h-[320px] w-[320px] rounded-full bg-primary1 blur-[81px]  2xl:h-[430px] 2xl:w-[430px]" />
      </section>
    </main>
  );
};

VerificationPage.getLayout = (page) => {
  return <UserPageLayout header={false}>{page}</UserPageLayout>;
};

export default VerificationPage;
