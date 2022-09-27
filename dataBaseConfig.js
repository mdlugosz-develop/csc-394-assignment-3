const {Client } = require('pg')


const client = new Client({
  user: 'postgres',
  host: 'db-hw3.cuxan22o5wli.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'password',
  port: 5432,
})

client.connect();

module.exports = client;