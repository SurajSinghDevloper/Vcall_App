const userModal = require('../Model/userModel')

module.exports.signup = (req, res) => {
    // creating instance of userModal
    const newUser = new userModal({
        name: req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        phone: req.body.phone,
        password: req.body.password,
        cpassword: req.body.cpassword,
    })



    newUser.save().then(() => {
        res.send({ code: 200, message: "Sign-Up SUCCESS..." })
    }).catch((err) => {
        res.send({ code: 500, message: "Something went Wrong on server" })
        console.log(err)
    })
    console.log(req.body);
}


module.exports.signin = (req, res) => {

    // matching email.and password
    userModal.findOne({ email: req.body.email }).then(result => {
        console.log(result);
        // matching password
        if (result.password !== req.body.password) {
            res.send({ code: 404, message: "opps!! Pass Not matched" })
        } else {
            res.send({ code: 200, message: "user Found", token: "qwertyiop" })
        }
    }).catch(err => { res.send({ code: 500, message: "User NOT found....." }) })

}