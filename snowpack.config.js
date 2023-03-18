// snowpack.config.js
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-typescript'],
  buildOptions: {
    out: 'build',
  },
};
