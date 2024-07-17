const mysql= require("mysql2")
const connection=mysql.createConnection({
  host: 'localhost',
  user:'root',
  password:'root',
  database:'bookmanagement'

})

connection.connect((err)=>{
  if(err) {
    console.log(err)
  }
  else {
    console.log("database is connected")
  }
})

module.exports={connection}


