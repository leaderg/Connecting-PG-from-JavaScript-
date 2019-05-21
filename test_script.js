const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

let input = process.argv.slice(2)[0];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log("Searching...");
  client.query("SELECT * FROM famous_people WHERE first_name = $1", [input], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(`Found ${result.rows.length} person(s) by the name '${input}'`);
    for (let entry in result.rows) {
      let index = Number(entry) + 1;
      console.log (`- ${index}: ${result.rows[entry].first_name} ${result.rows[entry].last_name}, born ${result.rows[entry].birthdate}`);
    }
    client.end();
  });
});

// first_name: 'Paul',
//     last_name: 'Rudd',
//     birthdate: 1969-04-06T00:00:00.000Z