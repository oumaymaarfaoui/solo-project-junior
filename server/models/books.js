const {connection} =require('../database/database/index.js')

const getall=function(callback) {
    const sql=`SELECT * FROM books`
    connection.query(sql, function(err, result){
      callback(err, result)
    })
  }

const add=function(book, callback) {
  const sql = `INSERT INTO books SET ?`
  connection.query(sql, book, function(err, result) {
    callback(err, result)
  })
}

const deletee=function(bookid, callback) {
  const sql= `DELETE FROM books WHERE idbooks=${bookid}`
  connection.query(sql, function(err, result) {
    callback(err, result)
  })
}

const update = function(bookid, priceup, descripup, callback) {
  const sql = `UPDATE books SET price = ?, description = ? WHERE idbooks = ?`;
  connection.query(sql, [priceup, descripup, bookid], function(err, result) {
    callback(err, result);
  });
};

module.exports={
    getall, 
    add,
    deletee,
    update
}