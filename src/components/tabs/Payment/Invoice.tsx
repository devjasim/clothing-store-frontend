import React from 'react';
import {useForm} from 'react-hook-form';

import {Select} from '~/components/Select';
import {Button} from '~/ui/Button';

type FormData = {
  email: string;
  name: string;
  amount: number;
  memo: string;
};

export const Invoice = () => {
  const {register, handleSubmit} = useForm<FormData>({
    defaultValues: {
      email: '',
      name: '',
      amount: 0,
      memo: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="max-w-[900px] space-y-5">
      <div className="space-y-5 rounded-lg border border-gray-500/30 px-5 py-10">
        <h2 className="text-3xl font-[500]">Customer Details</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-8">
            <div>
              <label className="space-y-2">
                <span className="ml-1">Email</span>
                <input
                  className="h-[40px] w-full rounded-lg border border-[#CFD9E0] px-3"
                  type="'email"
                  {...register('email', {required: true})}
                />
              </label>
              <p className="mt-1 text-sm text-primary1">
                This ensures that your customer will recieve a reciept after the
                payment is done
              </p>
            </div>
            <div>
              <label className="space-y-2">
                <span className="ml-1">Customer Name</span>
                <input
                  className="h-[40px] w-full rounded-lg border border-[#CFD9E0] px-3"
                  type="text"
                  {...register('name', {required: true})}
                />
              </label>
              <p className="mt-1 text-sm text-primary1">
                Your customer name will appear as a greeting in the suggested
                email tect
              </p>
            </div>
            <div className="grid items-end gap-3 sm:grid-cols-[85%,15%]">
              <label className="space-y-2">
                <span className="ml-1">Amount Requested</span>
                <input
                  className="h-[40px] w-full rounded-lg border border-[#CFD9E0] px-3"
                  type="text"
                  {...register('amount', {required: true, min: 0})}
                />
              </label>
              <Select />
            </div>
            <label className="space-y-2">
              <span className="ml-1">Memo</span>
              <input
                className="h-[40px] w-full rounded-lg border border-[#CFD9E0] px-3  placeholder:text-sm"
                type="text"
                {...register('memo', {required: true})}
              />
            </label>
            <Button
              variant="primary"
              className="h-[55px] w-full self-center rounded-[20px] sm:w-[330px]"
            >
              Create Invoice
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
