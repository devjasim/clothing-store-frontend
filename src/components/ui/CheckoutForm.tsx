import axios from 'axios';
import {NextPageWithLayout} from 'next';
import {useRouter} from 'next/router';
import GoogleLogin from 'react-google-login';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import { useSelector } from 'react-redux';

import {Google} from '~/constants/icons';
import { useAuths } from '~/context/AuthContext';
import {signUp} from '~/hooks/api';
import {useAuth} from '~/hooks/useAuth';
import {Main} from '~/layouts/Main';
import {Meta} from '~/layouts/Meta';
import {Button} from '~/ui/Button';
import {CheckBox} from '~/ui/CheckBox';
import {NextLink} from '~/ui/NextLink';
import {PasswordField, TextField} from '~/ui/TextInput';
import {ToggleTheme} from '~/ui/ToggleButton';
import {notify} from '~/utils/notify';


type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  terms: boolean;
};

export const CheckoutForm = () => {
  const router = useRouter();
  const cartItems = useSelector((state: any) => state.products)

  const [, setAuth] = useAuth({
    firstName: '',
    lastName: '',
    email: '',
  });

  const userData = useAuths();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      terms: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const {firstName, lastName, address} = data;
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item?.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + parseInt(item?.price || '0') * Number(item?.qty), 0)
      .toFixed(2)
  }

  const API = process.env.NODE_ENV === "development" ? "http://localhost:3001/api/v1/user/google-login" : "https://api.stablespay.com/api/v1/user/google-login";


  return (
    <Main meta={<Meta title="StablePay Login" description="" />}>
      <main className="mx-auto grid min-h-screen max-w-[1400px] gap-20 px-5 dark:text-white lg:grid-cols-[60%,30%]">
        <section className="mb-10 grid  grid-rows-[100px,1fr]">
          <button onClick={() => router.push('/')}>
            Clothing Store
          </button>
          <div className="flex flex-col space-y-9">
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-3xl font-[500]">Checkout out</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mx-auto max-w-[530px] space-y-9">
                <div className="space-y-2">
                  <div className="grid w-full gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Controller
                        control={control}
                        name="firstName"
                        rules={{required: true, minLength: 2}}
                        render={({field}) => (
                          <TextField
                            error={
                              errors.firstName &&
                              errors.firstName.type === 'required'
                            }
                            variant="firstName"
                            {...field}
                          />
                        )}
                      />
                      <Controller
                        control={control}
                        name="lastName"
                        rules={{required: true, minLength: 2}}
                        render={({field}) => (
                          <TextField
                            error={
                              errors.lastName &&
                              errors.lastName.type === 'required'
                            }
                            variant="lastName"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <Controller
                      control={control}
                      name="phoneNumber"
                      rules={{
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      }}
                      render={({field}) => (
                        <input
                        placeholder='Phone Number'
                        className='h-full w-full border border-gray-500 rounded-md py-3 bg-transparent max-w-full p-0  min-w-0 text-gray-900 dark:text-white pl-2 placeholder:text-[#414D63] dark:placeholder:text-white placeholder:font-[300]'
                          name={field.name}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="address"
                      rules={{required: true, minLength: 6}}
                      render={({field}) => (
                        <input
                            placeholder='Address'
                            className='h-full w-full border border-gray-500 rounded-md py-3 bg-transparent max-w-full p-0  min-w-0 text-gray-900 dark:text-white pl-2 placeholder:text-[#414D63] dark:placeholder:text-white placeholder:font-[300]'
                            name={field.name}
                        />
                      )}
                    />
                    <Controller
                      control={control}
                      name="address"
                      rules={{required: true, minLength: 6}}
                      render={({field}) => (
                        <input
                            placeholder='Payment Method'
                            className='h-full w-full border border-gray-500 rounded-md py-3 bg-transparent max-w-full p-0  min-w-0 text-gray-900 dark:text-white pl-2 placeholder:text-[#414D63] dark:placeholder:text-white placeholder:font-[300]'
                            name={field.name}
                        />
                      )}
                    />
                    <div>
                      <Controller
                        control={control}
                        name="terms"
                        rules={{required: true}}
                        render={({field}) => (
                          <CheckBox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            label="I concent to all terms and condtions "
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="mt-5 text-green-600">
                        Total cart Items {getCartCount()}
                    </h2>
                  </div>
                  <div>
                    <h2 className="mt-5 text-xl font-bold text-green-600">
                        Total amount {getCartSubTotal()}
                    </h2>
                  </div>
                  <div className="space-y-[30px] pt-7">
                    <Button
                      variant="primary"
                      className="h-[55px] w-full rounded-3xl"
                      type="submit"
                    >
                      Payment
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


export default CheckoutForm;
