const { resolve } = require('path');

module.exports = {
    //для того чтобы начать связывание вебпаку нужен входной файл
    entry: "./index.js",
    //настройки выхода
    output: {
        filename: "index.bundle.js",
        path: resolve(__dirname, 'dist')
    },
    target: "node",
    //режим разработка или продакшен
    mode: "production"
};