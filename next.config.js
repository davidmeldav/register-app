module.exports = {
    async rewrites() {
        return [
          {
            source: 'http://localhost:3000/api/search*',
            destination: 'http://localhost:3004/names',
          },
        ]
      },
  };
  module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    }
  }