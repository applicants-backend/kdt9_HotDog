const bcrypt = require('bcrypt');
const {User, Room, UserRoom} = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET=process.env.login_SECRET;
const round=Number(process.env.hashRound);

const get_main = (req, res) => {
    res.render('mate')
}

const post_verify = async (req, res) => {
    try {
        const token = req.body.token
        const tokenInfo = await jwt.verify(token, SECRET)
        const user = await User.findOne({
            where: {
                userid: tokenInfo.userid
            }
        })
        res.json({result: true, userinfo: user})
    } catch (error) {
        console.log(error)
        res.json({result: false})
    }
}


module.exports = {
    get_main,
    post_verify
}

const bcryptPassword = (password) => bcrypt.hash(password,round);
const compareFunc = (password,dbpass) => bcrypt.compare(password,dbpass)