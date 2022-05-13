import React from 'react';
import {Controller, useForm} from 'react-hook-form';

import {Button} from '~/ui/Button';
import {PasswordField} from '~/ui/TextInput';

type FormData = {
  oldpassword: string;
  newpassword: string;
  newpasswordconfirm: string;
};

export const Password = () => {
  const {handleSubmit, control} = useForm<FormData>({
    defaultValues: {
      oldpassword: '',
      newpassword: '',
      newpasswordconfirm: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10 max-w-[530px] space-y-5">
          <Controller
            control={control}
            name="oldpassword"
            render={({field}) => (
              <PasswordField
                {...field}
                variant="password"
                placeholder="Old password"
              />
            )}
          />
          <Controller
            control={control}
            name="newpassword"
            render={({field}) => (
              <PasswordField
                {...field}
                variant="password"
                placeholder="New Password"
              />
            )}
          />
          <Controller
            control={control}
            name="newpasswordconfirm"
            render={({field}) => (
              <PasswordField
                {...field}
                variant="passwordConfirm"
                placeholder="Retype new password"
              />
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
