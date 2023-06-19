// * 在不同的环境下会有不同的值 // * 推荐

// * 根据process.env.NODE_ENV
// 开发环境: development
// 生产环境: production
// 测试环境: test

const BASE_IP = 'http://127.0.0.1';
// const BASE_IP = 'http://10.87.1.101';
const BASE_HOST = `${BASE_IP}:7001`;

let BASE_URL = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
    BASE_URL = BASE_HOST + '/api';
} else if (process.env.NODE_ENV === 'production') {
} else {
}

export { TIME_OUT, BASE_URL, BASE_HOST, BASE_IP };
