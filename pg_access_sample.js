'use strict'
let pg = require("pg");

const connectionString = "tcp://ubukochan:7adf1105@localhost:5432/my_database";

pg.connect(connectionString, (err, client) => {
  client.query("select * from my_table001", (err, result) => {
    console.log("検索結果件数:" + result.rows.length);

    for (var i = 0; i < result.rows.length; i++) {
      console.log("No."+result.rows[i].row+" -> name:"+result.rows[i].name);
    }
  });
});
