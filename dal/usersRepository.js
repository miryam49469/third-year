// const model = require('../models')
// const user = model.user



var users=[];

class usersRepository{
    DBgetOrderById=(id)=>{return users.filter((x)=>{x.id==id})[0];}
    create=(obj)=>{users.push(obj);}
    update=(id,obj)=>{
        var ind=users.indexOf((x)=>{x.id==id});
        users[ind]=obj;
    }
    delete=(id)=>{users=users.filter((x)=>{x.id==id})}
}
module.export= usersRepository;