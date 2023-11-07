const bcrypt = require("bcrypt")

const salt = 10 

function bcryptPw(pw){
    return bcrypt.hashSync(pw, salt)
}

function compare(pw, dbPw){
    return bcrypt.compareSync(pw, dbPw)
}

console.log("1234:", bcryptPw("1234"))