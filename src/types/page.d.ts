import type {NextPage} from 'next';
import type {Router} from 'next/dist/client/router';
import type {NextComponentType} from 'next/dist/next-server/lib/utils';
import type {CompletePrivateRouteInfo} from 'next/dist/shared/lib/router/router';

declare module 'next/app' {
  export declare type AppProps = Pick<
    CompletePrivateRouteInfo,
    'Component' | 'err'
  > & {
    router: Router;
  } & Record<string, any> & {
      Component: {
        getLayout?: (page: JSX.Element) => JSX.Element;
      };
    };
}

declare module 'next' {
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout: (component: NextComponentType) => JSX.Element;
  };
}

declare module 'use-persisted-state' {
  function createPersistedState<T>(
    key: string,
    storage?: Storage
  ): (initialState: T) => [T, React.Dispatch<React.SetStateAction<T>>];
  export = createPersistedState;
}
