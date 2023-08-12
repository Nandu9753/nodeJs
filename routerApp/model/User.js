const con  = require('../db');
const userAddModel = (data) => {
    const sql = "INSERT INTO users (name,email,mobile) VALUES ?";
    const values = [
        [data.name,data.email,data.mobile]
    ]
    con.query(sql, [values], function (err, result) {
        if (err) throw err;        
            console.log("Number of records inserted: " + result.affectedRows);
      });
}
module.exports = userAddModel;