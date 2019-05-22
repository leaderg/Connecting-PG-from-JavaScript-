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

knex.select().from('milestones').asCallback((err, result) => {
   if (err) {
    return console.error("Connection Error", err);
  }
  console.dir(result);
  // for (let entry in result) {
  //   console.log(result[entry]);
  // }
});


