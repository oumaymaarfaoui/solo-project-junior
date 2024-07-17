const {getall, add, deletee, update }= require('../models/books.js')

const getallbook=(req, res)=>{
    getall(function(err, result){
        if(err) res.status(500).send(err)
            else res.status(200).send(result)
    })
}

const addbook=(req, res)=>{
    var book=req.body
    add(book, function(err, result){
        if(err) res.status(500).send(err)
            else res.status(200).send(result)
    })
}

const deletebook=(req, res)=>{
    var idbook=req.params.idbook

    deletee(idbook, function(err, result) {
        if(err) res.status(500).send(err)
            else res.status(200).send(result)
    })
}

const updatebook=(req, res)=>{
    var idbook=req.params.idbook
    console.log("idbook", idbook)
    var upprice=req.body.price
    var updescrip=req.body.description
    update(idbook, upprice,updescrip, function(err, result){
        if(err) res.status(500).send(err)
            else res.status(200).send(result)
    })
}
module.exports={
    getallbook,
    addbook, 
    deletebook,
    updatebook
}