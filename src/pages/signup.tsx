import {NextPage} from 'next';
import {useForm} from 'react-hook-form';

import {Google} from '~/constants/icons';
import {Main} from '~/layouts/Main';
import {Meta} from '~/layouts/Meta';
import {Button} from '~/ui/Button';
import {CheckBox} from '~/ui/CheckBox';
import {Logo} from '~/ui/Logo';
import {TextInput} from '~/ui/TextInput';

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

export const SignUpPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('-------------------------------');
    console.log(data);
    console.log('-------------------------------');
  };

  return (
    <Main meta={<Meta title="StablePay Login" description="" />}>
      <main className="grid min-h-screen max-w-[1400px] gap-20 px-5 lg:grid-cols-2">
        <section className="mb-10 grid  grid-rows-[100px,1fr]">
          <Logo width={200} height={90} />
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
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <TextInput
                          variant="firstName"
                          {...register('firstName', {required: true})}
                        />
                        {errors.firstName && (
                          <p className="text-xs italic text-red-500">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <TextInput
                        variant="lastName"
                        {...register('lastName', {required: true})}
                      />
                    </div>
                    <TextInput
                      variant="email"
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      })}
                    />
                    <TextInput
                      variant="password"
                      {...register('password', {
                        required: true,
                        pattern: /^[A-Za-z0-9]{6,}$/,
                      })}
                    />
                    <TextInput
                      variant="passwordConfirm"
                      {...register('passwordConfirm', {
                        required: true,
                        pattern: /^[A-Za-z0-9]{6,}$/,
                      })}
                    />
                  </div>
                  <CheckBox
                    label="I concent to all terms and condtions "
                    {...register('term')}
                  />
                </div>
                <div className="space-y-[30px]">
                  <Button
                    variant="primary"
                    className="h-[55px] w-full rounded-3xl"
                    type="submit"
                  >
                    Sign up
                  </Button>
                  <Button className="flex h-[55px] w-full items-center justify-center space-x-3 rounded-3xl border border-[#CFD9E0]">
                    <Google /> <span>Sign up with Google</span>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="relative hidden h-full  lg:block">
          <div className="fixed top-[-28%] right-0 h-[320px] w-[320px] rounded-full bg-primary4  blur-[81px] 2xl:h-[430px] 2xl:w-[430px]" />
          <div className="fixed bottom-[-23%] h-[320px] w-[320px] rounded-full bg-primary1 blur-[81px]  2xl:h-[430px] 2xl:w-[430px]" />
        </section>
      </main>
    </Main>
  );
};

export default SignUpPage;
