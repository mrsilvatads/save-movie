'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {

  connection: Env.get('DB_CONNECTION', 'pg'),

 
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
    },
    useNullAsDefault: true,
    debug: Env.get('DB_DEBUG', false)
  },

  mysql: {
    client: 'mysql',
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', ''),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'adonis')
    },
    debug: Env.get('DB_DEBUG', false)
  },

  // pg: {
  //   client: 'pg',
  //   connection: {
  //     host: Env.get('DB_HOST', 'localhost'),
  //     port: Env.get('DB_PORT', ''),
  //     user: Env.get('DB_USER', 'root'),
  //     password: Env.get('DB_PASSWORD', ''),
  //     database: Env.get('DB_DATABASE', 'adonis')
  //   },
  //   debug: Env.get('DB_DEBUG', false)
  // }
  pg: {
    client: 'pg',
    connection: 'postgres://ciwmvvyqkpeuhr:dbedfef12152f385d863dd9f04bb631827adcbd5879bec869f5628886a765032@ec2-52-0-67-144.compute-1.amazonaws.com:5432/d7plsckal01i2e?sslmode=require',
    // 'postgres://qjoulbrztsremz:47d96661586186d7aac17f4c6537dda11155588803c70e57fbf9916c00e0f621@ec2-52-86-2-228.compute-1.amazonaws.com:5432/d5l84cbeq9qc3p',
    // Env.get('DATABASE_URL', '') 
    debug: Env.get('DB_DEBUG', false)
  }
}
