const mysql = require('mysql');

class DB {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'rsvp',
      password: 'gimmedatrsvp',
      database: 'RS_vp',
    });
  }

  query(sql) {
    return new Promise((resolve, reject) => {
      this.connection.connect();

      this.connection.query(sql, function (error, results, fields) {
        if (error) reject(error);
        resolve(results);
      });
    
      this.connection.end();
    });
  }
}

module.exports = DB;