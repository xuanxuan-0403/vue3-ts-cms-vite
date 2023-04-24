import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Unocss from '@unocss/vite';
import { presetUno, transformerDirectives } from 'unocss';
import { presetDaisy } from 'unocss-preset-daisy';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@store': path.resolve(__dirname, 'src/store'),
        },
    },
    css: {
        devSourcemap: false,
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve(
                        '/src/assets/css/base.css',
                    )}";`,
                },
                javascriptEnabled: true,
            },
        },
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets', //指定静态资源存放路径
        sourcemap: false, //是否构建source map 文件
        minify: 'terser', // 混淆器，terser 构建后文件体积更小，'terser' | 'esbuild'
        chunkSizeWarningLimit: 1500, //chunk 大小警告的限制，默认500KB
        rollupOptions: {
            output: {
                // 最小化拆分包
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
                chunkFileNames: 'js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名，[name]表示文件名,[hash]表示该文件内容hash值
            },
        },
    },
    server: {
        https: false, // 是否开启 https
        open: false, // 是否自动在浏览器打开
        cors: true, // 允许跨域
        port: 3000, // 端口号
        host: '0.0.0.0',
        hmr: {
            overlay: false, // [unocss] entry module not found, have you add `import 'uno.css'` in your mai
        },
        proxy: {
            '/api': {
                target: 'http://10.87.1.106:7001', //实际请求地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [
        vue(),
        Unocss({
            transformers: [transformerDirectives()],
            presets: [presetDaisy(), presetUno()],
        }),
    ],
});
