module.exports = {
  apps : [{
    script: 'bin/www',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '51.77.222.144',
      ref  : 'origin/master',
      repo : 'https://github.com/kevin-smrt/PORTFOLIO',
      path : '/home/ubuntu/pm2-deploy',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
