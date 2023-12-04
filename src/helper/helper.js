const bcrypt=require('bcrypt');
const moment=require('moment');


const encryptPassword=(password)=>{
    const salt=bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt);
}

const matchPassword=(password,hash)=>bcrypt.compareSync(password,hash);

//task to validate time 


module.exports={
    encryptPassword,
    matchPassword
}