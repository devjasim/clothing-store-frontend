import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useFileUpload} from 'use-file-upload';

import {useAuth} from '~/hooks/useAuth';
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
  // @ts-ignore
  const [, setAuth] = useAuth();
  const [file, selectFile] = useFileUpload();
  const {handleSubmit, control} = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
    },
  });
  const onSubmit = (data: FormData) => {
    setAuth((state) => ({
      ...state,
      email: data.email ? data.email : state?.email,
      firstName: data.firstName ? data.firstName : state?.firstName,
      lastName: data.lastName ? data.lastName : state?.lastName,
    }));
    console.log(data);
  };
  return (
    <section className="mx-auto mt-10">
      <div className="mx-auto flex items-center space-x-3">
        {/* @ts-ignore */}
        <Avatar imgUrl={file?.source || '/assets/images/profile.png'} />
        <Button
          onClick={() => {
            selectFile(
              {
                accept: 'image/*',
                multiple: false,
              },
              // @ts-ignore
              ({source}) => {
                setAuth((state) => ({...state, profile: source}));
              }
            );
          }}
          className="h-[40px] w-[100px] rounded-2xl border border-gray-400 text-primary1 dark:border-white"
        >
          Change
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10  space-y-5">
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
