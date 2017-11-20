const path = require('path');
const pxtorem = require('postcss-pxtorem');
const { version } = require('./package.json');
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, '') // antd-mobile 内置svg
  // path.resolve(__dirname, './scr/assets'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  autoprefixer: {
    browsers: [
      "iOS >= 8", "Android >= 4"
    ]
  },
  publicPath: `/${version}/`,
  outputPath: `./dist/${version}`,
  proxy: {
    "/Mobile": {
      "target": "http://test.linkpet.com.cn/",
      "changeOrigin": true,
      "pathRewrite": {"^/Mobile": "/Mobile"}
    }
  },
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        ['import', {'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true}]
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 100,
          propWhiteList: [],
        }),
      ],
    },
    production: {
      // publicPath: './',
      extraBabelPlugins: [
        'transform-runtime',
        ['import', {'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true}]
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 100,
          propWhiteList: [],
        }),
      ],
    }
  },
  dllPlugin: {
    exclude: ["babel-runtime", "roadhog", "cross-env"],
    include: ["dva/router", "dva/saga", "dva/fetch"]
  }
}
