module.exports = function(app){
    
    let User = require('../models/user');

    let UserController = {

        find: (req, res) => {
            User.find({}, (err, result) => {
                if (err) res.status(500).send(err);
                
                res.json(result);
            })
        },
        create: (req, res) =>{
            let user = new User(req.body);
            console.log(user)
            user.save(function(err) {
                if (err) {
                    console.log("Erro", err)
                    res.status(500).send("Create user error");
                }
                console.log("salvou")
                res.status(200).json({})
            })
            
        }
    };

    return UserController;
}