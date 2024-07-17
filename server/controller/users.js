const {add, get}=require('../models/users.js')

const adduser = (req, res) => {
    const password = req.body.password;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        res.status(400).send({ error: "Invalid password format. Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long." });
        return;
    }
    else {
        add(req.body, function(err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    }
    
};

const getusers=(req, res)=>{
    get(function(err, result) {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(result)
        }
    })
}


module.exports={
    adduser,
    getusers
}