import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';

import {Google} from '~/constants/icons';
import {Main} from '~/layouts/Main';
import {Meta} from '~/layouts/Meta';
import {Button} from '~/ui/Button';
import {CheckBox} from '~/ui/CheckBox';
import {Logo} from '~/ui/Logo';
import {PasswordField, TextField} from '~/ui/TextInput';

// const ERROR_MESSAGES = {
//   firstName: {required: 'Please enter your first name'},
//   lastName: {required: 'Please enter your last name'},
//   email: {
//     required: 'Please enter your email',
//     pattern: 'Please enter a valid email',
//   },
//   password: {
//     required: 'Please enter your password',
//     pattern: 'Please enter a valid password',
//   },
//   confirmPassword: {
//     required: 'Please confirm your password',
//     pattern: 'Please enter a valid password',
//     match: 'Passwords do not match',
//   },
//   terms: {
//     required: 'You must accept the terms and conditions',
//   },
// };

type FormData = {
  email: string;
  password: string;
  keepSignedIn: boolean;
};

export const SignUpPage: NextPage = () => {
  // const {setAuth} = useAuth();
  const router = useRouter();
  const {handleSubmit, control} = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      keepSignedIn: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    // const {email, password} = data;
    console.log(data);
    router.push('/dashboard');
  };

  return (
    <Main meta={<Meta title="StablePay Login" description="" />}>
      <main className="mx-auto grid min-h-screen max-w-[1400px] gap-20 px-5 lg:grid-cols-[60%,30%]">
        <section className="mb-10 grid  grid-rows-[100px,1fr]">
          <button onClick={() => router.push('/')}>
            <Logo width={200} height={90} />
          </button>
          <div className="space-y-9">
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
                    <Controller
                      control={control}
                      name="keepSignedIn"
                      rules={{required: true}}
                      render={({field}) => (
                        <CheckBox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          label="Keep me signed in"
                        />
                      )}
                    />
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

export default SignUpPage;
