module.exports = {
    apps: [
        {
            name: "{{APP_NAME}}",
            script: "bun",
            args: "next start -p {{APP_PORT}}",
            cwd: "{{APP_PATH}}",
            interpreter: "none",
            autorestart: true,
            restart_delay: 2000,
            kill_timeout: 5000,
            env: {
                NODE_ENV: "production",
            }
        }
    ]
};