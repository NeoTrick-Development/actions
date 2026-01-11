module.exports = {
  apps: [
    {
      name: "{{APP_NAME}}",
      script: "{{APP_TYPE}}",
      args: "run start -- -p {{APP_PORT}}",
      cwd: "{{APP_PATH}}",
      env: {
        NODE_ENV: "production",
      },
      watch: false,
    }
  ]
};