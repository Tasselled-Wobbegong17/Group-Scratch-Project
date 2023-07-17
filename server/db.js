/*
** Database connection through Supabase **

import 'postgres' npm module
env variables highly recommended; in this case,
was imported in server.js
*/
const postgres = require('postgres');

//'postgres' npm module and Supabase URL to prepare pool connection for export
const connectionString = process.env.DATABASE_URL;
// console.log(process.env.DATABASE_URL)
const sql = postgres(connectionString);

/*
** Example SQL query with Supabase pool syntax **

async function getUser() {
  const user = await sql`
    SELECT username
    FROM users
    WHERE username = 'USERNAME_HERE';
  `
  return user;
}
*/

module.exports = sql;