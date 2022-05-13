import createPersistedState from 'use-persisted-state';

// @ts-ignore
export const useAuth = createPersistedState<any>('auth') as any;
