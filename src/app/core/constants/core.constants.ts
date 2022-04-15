import { API } from './api.constants';

export const APIS_TO_CACHE = [
  {
    url: API.GET_RESUME_DETAILS,
  },
];

export const EMAIL_PATTERN = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';

export const PASSWORD_PATTERN = '^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

export const CV_SHARE_URL_PREFIX = 'https://simplecv.vercel.app/cv';
