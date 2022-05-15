import {NextPageWithLayout} from 'next';
import {useRouter} from 'next/router';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

import {Google} from '~/constants/icons';
import {useAuth} from '~/hooks/useAuth';
import {Main} from '~/layouts/Main';
import {Meta} from '~/layouts/Meta';
import {Button} from '~/ui/Button';
import {CheckBox} from '~/ui/CheckBox';
import {Logo} from '~/ui/Logo';
import {NextLink} from '~/ui/NextLink';
import {PasswordField, TextField} from '~/ui/TextInput';
import {ToggleTheme} from '~/ui/ToggleButton';

import {UserPageLayout} from '../layouts';

type FormData = {
  email: string;
  password: string;
  keepSignedIn: boolean;
};

export const LoginPage: NextPageWithLayout = () => {
  const notify = () =>
    toast("Account doesn't exits, Please create one!", {
      type: 'error',
      theme: 'colored',
    });

  const router = useRouter();
  // @ts-ignore
  const [auth] = useAuth();
  const {handleSubmit, control} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      keepSignedIn: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    if (data.email === auth?.email && data.password === auth?.password) {
      router.push('/user');
    } else {
      notify();
      router.push('/signup');
    }
  };

  return (
    <Main meta={<Meta title="StablePay Login" description="" />}>
      <main className="mx-auto grid min-h-screen max-w-[1400px] gap-20 px-5 dark:text-white lg:grid-cols-[60%,30%]">
        <section className="mb-10 grid  grid-rows-[100px,1fr]">
          <button onClick={() => router.push('/')}>
            <Logo width={200} height={90} />
          </button>
          <div className="flex flex-col space-y-9">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-3xl font-[500]">Get started</h2>
              <p className="max-w-[50ch] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ridiculus hendrerit aenean quam rhoncus ac
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mx-auto max-w-[530px] space-y-9">
                <div className="space-y-2">
                  <div className="grid w-full gap-5">
                    <Controller
                      control={control}
                      name="email"
                      rules={{
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      }}
                      render={({field}) => (
                        <TextField variant="email" {...field} />
                      )}
                    />
                    <Controller
                      control={control}
                      name="password"
                      rules={{required: true, minLength: 6}}
                      render={({field}) => (
                        <PasswordField variant="password" {...field} />
                      )}
                    />
                    <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 ">
                      <Controller
                        control={control}
                        name="keepSignedIn"
                        rules={{required: false}}
                        render={({field}) => (
                          <CheckBox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            label="Keep me signed in"
                          />
                        )}
                      />
                      <div className="text-sm">
                        <span>Don&apos;t have an account? </span>
                        <NextLink
                          href="/signup"
                          className="text-blue-400 underline"
                        >
                          Sign Up
                        </NextLink>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-[30px] pt-7">
                    <Button
                      variant="primary"
                      className="h-[55px] w-full rounded-3xl"
                      type="submit"
                    >
                      Login
                    </Button>
                    <Button
                      type="button"
                      className="flex h-[55px] w-full items-center justify-center space-x-3 rounded-3xl border border-[#CFD9E0]"
                    >
                      <Google /> <span>Login with Google</span>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex items-center space-x-5 self-center justify-self-center">
              <span>Active dark mode</span>
              <ToggleTheme />
            </div>
          </div>
        </section>
        <section className="relative hidden h-full lg:block">
          <div className="fixed top-[-28%] right-0 h-[320px] w-[320px] rounded-full bg-primary4  blur-[81px] 2xl:h-[430px] 2xl:w-[430px]" />
          <div className="fixed bottom-[-23%] h-[320px] w-[320px] rounded-full bg-primary1 blur-[81px]  2xl:h-[430px] 2xl:w-[430px]" />
        </section>
      </main>
    </Main>
  );
};

LoginPage.getLayout = (page) => {
  return <UserPageLayout header={false}>{page}</UserPageLayout>;
};

export default LoginPage;
