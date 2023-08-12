const productModel = require('../model/Product');

const product =  (req,res) => {
    const result =  productModel.product(res);
}
const productAdd =  (req,res) => {
    const values = [
        [req.body.name,req.body.price,req.body.quantity,req.body.manu_date]
    ]
    const result =  productModel.productAdd(values,res);
}
const productEdit =  (req,res) => {
    const id = req.params.id;
    const result =  productModel.productEdit(req.body,res,id);
}

const productDelete =  (req,res) => {
    const result =  productModel.productDelete(req.params,res);
}
module.exports = { productAdd,productEdit,product,productDelete };