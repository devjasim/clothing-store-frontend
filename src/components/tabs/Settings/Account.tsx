import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import { useAuths } from '~/context/AuthContext';

import {updateUser} from '~/hooks/api';
import {useAuth} from '~/hooks/useAuth';
import {Avatar} from '~/ui/Avatar';
import {Button} from '~/ui/Button';
import {TextField} from '~/ui/TextInput';
import { notify } from '~/utils/notify';
//@ts-ignore
import FileBase from 'react-file-base64'

type FormData = {
  fullName: string;
  email: string;
  userName: string;
};

export const Account = () => {
  // const router = useRouter();
  // @ts-ignore
  const [, setAuth] = useAuth();
  const [file, selectFile] = React.useState<any>();

  const {auth: {userInfo}, setAuth: setAuths} = useAuths();

  const {handleSubmit, control, reset} = useForm<FormData>({
    defaultValues: {
      fullName: userInfo?.userName,
      email: userInfo?.email,
    },
  });


  const onSubmit = async (data: FormData) => {
    setAuth((state: any) => ({
      ...state,
      fullName: data.fullName ? data.fullName : state?.fullName,
      email: data.email ? data.email : state?.email,
    }));

    const formData = {
      userName: data.fullName,
      email: data.email,
      avatar: file
    }
    
    await updateUser(userInfo?._id, formData).then(res => {
      notify("User updated successfully!", 'success');
      setAuths(res.data.result);
    }).catch(err => {
      console.log("err", err);
    });

  };

  React.useEffect(() => {
    reset({
      fullName: userInfo?.userName,
      email: userInfo?.email,
    });
  }, []);

  return (
    <section className="mx-auto mt-10">
      <div className="flex items-center mx-auto space-x-3">
        {/* @ts-ignore */}
        <Avatar imgUrl={file || userInfo?.avatar || '/assets/images/profile.png'} />
        <Button
          className="file__uplaod h-[40px] w-[100px] rounded-2xl border border-gray-400 text-primary1 dark:border-white"
        >
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }: any) =>
              selectFile(base64)
            }
          />
          Change
        </Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10 space-y-5">
          <Controller
            control={control}
            name="fullName"
            render={({field}) => <TextField {...field} variant="fullName" />}
          />
          <Controller
            control={control}
            name="email"
            render={({field}) => <TextField {...field} variant="email" />}
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
