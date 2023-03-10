import {Listbox, Transition} from '@headlessui/react';
import {IconSelector} from '@tabler/icons';
import React, {Fragment, useState} from 'react';

const pagesizes = [
  {name: '6', value: 6},
  {name: '10', value: 10},
  {name: '15', value: 15},
  {name: '20', value: 20},
];

type Props = {
  setPageSize: (pageSize: number) => void;
};

export const PageSizeSelect = ({setPageSize}: Props) => {
  const [selected, setSelected] = useState(pagesizes[0]);
  return (
    <Listbox
      value={selected}
      onChange={(newSelected) => {
        setSelected(newSelected);
        setPageSize(newSelected!.value);
      }}
    >
      <div className="relative">
        <Listbox.Button className="relative h-[40px] w-full cursor-default rounded-md border border-[#CFD9E0] bg-transparent py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{selected!.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <IconSelector
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {pagesizes.map((size, cointIdx) => (
              <Listbox.Option
                key={cointIdx}
                className={({active}) =>
                  `relative cursor-default select-none py-2 px-5 ${
                    active ? 'bg-primary1/10 text-primary1' : 'text-gray-900'
                  }`
                }
                value={size}
              >
                <span className="block truncate">{size.name}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
