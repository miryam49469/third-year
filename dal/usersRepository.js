// const model = require('../models')
// const user = model.user



var users=[];

exports.create = async (req, res) => {
    if(req.body.email.includes('@'))
       users.push(req.body);
}
exports.update = async (req, res) => {
    var ind=users.indexOf((x)=>{x.id==id});
    users[ind]=obj;
}
exports.delete = async (req, res) => {
    users=users.filter((x)=>{x.id==id})
}
exports.getById = async (req, res) => {
    return orders.filter((x)=>{x.id==id})[0];}