import React from 'react';
import {Controller, useForm} from 'react-hook-form';

import {Avatar} from '~/ui/Avatar';
import {Button} from '~/ui/Button';
import {TextField} from '~/ui/TextInput';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
};

export const Account = () => {
  const {handleSubmit, control} = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section>
      <div className="flex items-center space-x-3">
        <Avatar imgUrl="/assets/images/profile.png" />
        <Button className="h-[40px] w-[100px] rounded-2xl border border-gray-400 text-primary1">
          Change
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10 max-w-[530px] space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Controller
              control={control}
              name="firstName"
              render={({field}) => <TextField {...field} variant="firstName" />}
            />
            <Controller
              control={control}
              name="lastName"
              render={({field}) => <TextField {...field} variant="lastName" />}
            />
          </div>
          <Controller
            control={control}
            name="email"
            render={({field}) => <TextField {...field} variant="email" />}
          />
          <Controller
            control={control}
            name="userName"
            render={({field}) => (
              <TextField {...field} variant="email" placeholder="Username" />
            )}
          />
          <Button
            variant="primary"
            className="h-[40px] w-full rounded-2xl text-primary1 sm:w-[150px]"
          >
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};
