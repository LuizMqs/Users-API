module.exports = {
    apps: [
      {
        script: 'app.js',
        cwd: 'frontend/',
        name: 'Frontend',
        watch: true
      },
      {
        script: 'server.js',
        cwd: 'backend/',
        name: 'Backend',
        watch: true
      }
    ]
  }