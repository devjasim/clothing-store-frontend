import createPersistedState from 'use-persisted-state';

type Auth = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  profile?: string;
};

export const useAuth = createPersistedState<Auth>('auth');
