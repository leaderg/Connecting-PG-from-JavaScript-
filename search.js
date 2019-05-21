const settings = require("./settings"); // settings.json

const knex = require('knex') ({
  client:'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

let firstname = process.argv.splice(2)[0];
console.log(firstname)

knex('famous_people').select().where('first_name', firstname).asCallback((err, result) => {
   if (err) {
    return console.error("Connection Error", err);
  }
  console.dir(result);
});