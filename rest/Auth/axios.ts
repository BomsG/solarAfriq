import axios, { AxiosInstance } from 'axios';
import nookies from 'nookies';

const SolarAfriqCookie = process.env.NEXT_PUBLIC_SOLAR_AFRIQ_COOKIE_NAME as string;

const api: AxiosInstance = axios.create({
  baseURL: process.env.BASE_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  function (config) {
    const cookie = nookies.get(null, SolarAfriqCookie);

    if (SolarAfriqCookie in cookie) {
      if (!!cookie[SolarAfriqCookie]) {
        // config.headers['x-token'] = cookie[SolarAfriqCookie];
        config.headers.Authorization = cookie[SolarAfriqCookie];
        // config.headers.Authorization = `Bearer ${assessTo}`;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// api.interceptors.request.use(
//   async (config) => {
//     // const accessToken =  getAccessToken();
//     // if (accessToken) {
//     //   const newConfig = { ...config };
//     //   newConfig.headers.Authorization = `Bearer ${accessToken}`;
//     // }
//     // return config;

//     const {token} = useAuthContext();

//     if (token) {
//       const newConfig = { ...config }
//       newConfig.headers['x-token'] = `${token}`
//     }
//   },

//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       return signOut({ callbackUrl: '/login' });
//     }
//     return Promise.reject(error);
//   }
// );

// const axiosReq = (options: RawAxiosRequestConfig) => api({ ...options });

export default api;
