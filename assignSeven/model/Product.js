const con = require('../db');

// All Product Find
const product = async (res) => {
    const sql = "SELECT * FROM product";
    const result = await con.query(sql,  function (err, result) {
        if (err) {
            res.send("Product Not Found");
        }else{        
            res.send(result);
        }    
        });
}


// product add 
const productAdd = async (data,res) => {
    const sql = "INSERT INTO product (name,price,quantity,manu_date) VALUES ?";
    const result = await con.query(sql, [data], function (err, result) {
        if (err) {
            res.send("Product addition failed")
        }else{        
            res.send("Product added successfully");
        }    
        });
}

// product Edit
const productEdit = async (data,res,id) => {
    const sql = `UPDATE product SET name = '${data.name}',price = '${data.price}',quantity = '${data.quantity}',manu_date = '${data.manu_date}' WHERE id = ${id}`;
    const result = await con.query(sql,  function (err, result) {
        if (err) {
            console.log(err);
            res.send("Product Edit failed")
        }else{        
            res.send("Product Edit successfully");
        }    
        });
}

// product Edit
const productDelete =  (req,res) => {
    const sql = `DELETE FROM product WHERE id = ${req.id}`;
     con.query(sql,  function (err, result) {
        if (err) {
            console.log(err);
            res.send("Product Delete failed")
        }else{        
            res.send("Product Delete successfully");
        }    
        });
}
module.exports = { productAdd,productEdit,product,productDelete };