const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username, email, password: hashedPassword});
        res.status(201).json({message: `User registred`, user});
    }catch(error){
        res.status(500).json({error: 'Error on user register'});
    }
}

exports.login = async (req, res) => {
    const {emai, password} = req.body;
    try{
        const user = await User.findOne({where: {email}});
        if(!user) return res.status(404).json({error: "User not found!"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(404).json({error: "Invalid Password"});

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message: "Success on Login!"});
    }catch(error){
        res.status(500).jason({error: `Error on login: ${error}`});
    }
}