const Pool = require("pg").Pool;

const pool = new Pool({
  user: "Akinyinka",
  password: "Akinyinka",
  database: "pernstack",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
