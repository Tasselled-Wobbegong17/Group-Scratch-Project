const postgres = require('postgres');

const connectionString = process.env.DATABASE_URL;
console.log(process.env.DATABASE_URL)
const sql = postgres(connectionString);

// async function getUser() {
//   const user = await sql`
//     SELECT username
//     FROM users
//     WHERE username = 'guh';
//   `
//   return user;
// }

module.exports = sql;