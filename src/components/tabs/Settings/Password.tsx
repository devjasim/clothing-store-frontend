import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import { useAuths } from '~/context/AuthContext';
import { updateUser } from '~/hooks/api';

import {Button} from '~/ui/Button';
import {PasswordField} from '~/ui/TextInput';
import { notify } from '~/utils/notify';

type FormData = {
  oldpassword: string;
  newpassword: string;
  newpasswordconfirm: string;
};

export const Password = () => {
  const {auth: {userInfo}, setAuth} = useAuths();
  const {handleSubmit, control, reset, formState: {errors}} = useForm<FormData>({
    defaultValues: {
      oldpassword: '',
      newpassword: '',
      newpasswordconfirm: '',
    },
  });

  const onSubmit = async(data: FormData) => {
    const formData = {
      password: data.oldpassword,
      newPassword: data.newpassword,
      confirmPassword: data.newpasswordconfirm,
    }
    
    await updateUser(userInfo?._id, formData).then(res => {
      notify("Password updated successfully!", 'success');
      setAuth(res.data.result);
      reset();
    }).catch(err => {
      notify(err.response.data.message, "error");
    });
  
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10 max-w-[530px] space-y-5">
          {userInfo?.changePass && (
            <Controller
              control={control}
              name="oldpassword"
              rules={{required: true}}
              render={({field}) => (
                <PasswordField
                  error={
                    errors.oldpassword &&
                    errors.oldpassword.type === 'required'
                  }
                  {...field}
                  variant="password"
                  placeholder="Old password"
                />
              )}
            />
          )}
          <Controller
            control={control}
            name="newpassword"
            rules={{required: true, minLength: 6}}
            render={({field}) => (
              <PasswordField
                {...field}
                error={
                  errors.newpassword &&
                  errors.newpassword.type === 'required'
                }
                variant="password"
                placeholder="New Password"
              />
            )}
          />
          <Controller
            control={control}
            name="newpasswordconfirm"
            rules={{required: true}}
            render={({field}) => (
              <PasswordField
                error={
                  errors.newpasswordconfirm &&
                  errors.newpasswordconfirm.type === 'required'
                }
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
