module.exports = {
  apps : [{
    name: "cms",
    script: "yarn develop",
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
