import XRRequest from './request/index';
import { BASE_URL, TIME_OUT } from './request/config';
import LocalCache from '@/utils/cache';

// * 在开发中，有可能axios实例使用的是不同的baseURL

const xrRequest = new XRRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    // 编写拦截器
    interceptors: {
        requestInterceptor(config) {
            // * 携带token的拦截
            const token = LocalCache.getCache('token') ?? '';
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            // console.log(config);
            return config;
        },
        requestInterceptorCatch(error) {
            return error;
        },
        responseInterceptor: (res) => {
            return res;
        },
        responseInterceptorCatch(error) {
            return error;
        },
    },
});

export default xrRequest;
