const appDefaultConfig = {
    exec_mode: 'fork',
    script: 'npx'
  }
  
  module.exports = {
    apps: [
      {
        ...appDefaultConfig,
        name: 'School Managment',
        args: 'env-cmd node ./.output/server/index.mjs',
        env: {
          PORT: 2003
        }
      }
    ]
  }
  