module.exports = {
  apps: [
    {
      name: 'valor-pain-wellness',
      script: 'server/index.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: 5173
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
};
