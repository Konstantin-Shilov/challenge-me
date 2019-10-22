const path = require('path');

const rootPath = path.resolve(__dirname, '../');
const resolve = (p) => path.resolve(rootPath, p);

module.exports = {
  BabelLoader: () => ({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  }),
  CssLoader: () => ({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  }),
  ImageLoader: () => ({
    test: /\.(gif|jpeg|jpg|png)$/,
    loader: 'file-loader',
    options: {
      name: 'images/[folder]/[name].[md5:hash:hex:10].[ext]',
      outputPath: 'assets',
    },
  }),
  FontLoader: () => ({
    test: /\.(eot|woff|woff2|ttf)$/,
    loader: 'file-loader',
    options: {
      name: 'fonts/[folder]/[name].[md5:hash:hex:10].[ext]',
      outputPath: 'assets',
    },
  }),
  SvgLoaderDev: () => ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }),
  resolve: () => ({
    extensions: ['.js', '.css'],
    modules: ['node_modules', 'src'],
    alias: {
      layout: resolve('src/layout'),
      pages: resolve('src/pages'),
      components: resolve('src/components'),
      lib: resolve('src/lib'),
      images: resolve('src/public/images'),
      styles: resolve('src/styles'),
      fonts: resolve('src/public/fonts'),
      config: resolve('src/config'),
      reducers: resolve('src/@redux/reducers'),
    },
    symlinks: false,
  }),
};
