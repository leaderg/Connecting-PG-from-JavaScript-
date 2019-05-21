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

let [first, last, bdate] = process.argv.splice(2);


knex('famous_people').insert({
    first_name: first,
    last_name: last,
    birthdate: bdate
  })
  .asCallback((err, result) => {
     if (err) {
      return console.error("Connection Error", err);
    }
    knex.select().from('famous_people').asCallback((err, result) => {
      if (err) {
        return console.error("Connection Error", err);
      }
      console.dir(result);
    });
  });