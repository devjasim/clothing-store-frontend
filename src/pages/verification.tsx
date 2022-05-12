import {NextPageWithLayout} from 'next';
import {useRouter} from 'next/router';
import React from 'react';

import {useAuth} from '~/context/AuthContext';
import {Button} from '~/ui/Button';
import {Logo} from '~/ui/Logo';

import {UserPageLayout} from '../layouts';

const hideGmail = (email: string) => {
  const [first, ...rest] = email.split('@');
  return `${first!.replace(/./g, '*')}@${rest.join('@')}`;
};

const BoxField = () => {
  return (
    <>
      <input
        className="h-[40px] w-[40px] rounded-md border border-[#CFD9E0] text-center shadow-[inset_0px_2px_0px_rgba(231,235,238,0.2)] sm:h-[50px]  sm:w-[50px]"
        max={1}
        placeholder="-"
      />
    </>
  );
};

const VerificationPage: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    auth: {email},
  } = useAuth();

  const onSubmit = () => {
    router.push('/dashboard');
  };

  return (
    <main className="mx-auto grid min-h-screen max-w-[1400px] gap-20 px-5 lg:grid-cols-[60%,30%]">
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
            <div className="mx-auto grid max-w-[500px] grid-cols-6">
              <BoxField />
              <BoxField />
              <BoxField />
              <BoxField />
              <BoxField />
              <BoxField />
            </div>
            <p className="mx-auto mt-5 text-center text-primary1">
              Resend Code in 59
            </p>
            <div className="space-y-[30px] pt-7">
              <Button
                variant="primary"
                className="h-[50px] w-full rounded-3xl"
                type="submit"
              >
                Sign up
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
