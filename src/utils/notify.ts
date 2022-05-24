import {toast, TypeOptions} from 'react-toastify';

export const notify = (message: String, type: TypeOptions) =>
toast(message, {
  type: type || "default",
  theme: 'colored',
});