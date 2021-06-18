module.exports = {
  presets: [
    "@babel/preset-env",
    "@vue/cli-plugin-babel/preset"
  ],
  env: {
    test: {
      presets: [[
        '@babel/preset-env', {
          debug: true
        }
      ]]
    }
  }
};
