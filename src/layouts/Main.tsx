import {ReactNode} from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-800 antialiased">
    {props.meta}
    {props.children}
  </div>
);

export {Main};
