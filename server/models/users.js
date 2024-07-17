const {connection}=require('../database/database/index.js')

const add=function(user,callback) {
    const sql=`INSERT INTO users SET ?`
    connection.query(sql, user, function(err, result){
        callback(err, result)
    })
}

const get=function(callback) {
    const sql=`SELECT * FROM users`
    connection.query(sql, function(err, result){
        callback(err, result)
    })
}

module.exports={
    add,
    get
}