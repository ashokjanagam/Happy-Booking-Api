module.exports = {

  test: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'happy',
      password: 'happy',
      database: 'happy'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'happy',
      password: 'happy',
      database: 'happy'
    },
    debug: true,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  qa: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'happy',
      password: 'happy',
      database: 'happy'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/qa'
    }
  },

  uat: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'happy',
      password: 'happy',
      database: 'happy'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/uat'
    }
  },

  happyqa: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOSTNAME || '127.0.0.1',
      user: process.env.DB_USERNAME || 'happy',
      password: process.env.DB_PASSWORD || 'happy',
      database: 'happy'
    },
    debug: process.env.DB_DEBUG || false,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOSTNAME || '127.0.0.1',
      user: process.env.DB_USERNAME || 'happy',
      password: process.env.DB_PASSWORD || 'happy!',
      database: 'happy'
    },
    debug: process.env.DB_DEBUG || false,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }

};
