const jwt = require('jsonwebtoken');
require('dotenv').config();

// const config = require('config');
async function auth(req,res,next){
    const token = req.header('token');
    if(!token) res.status(401).send('Access denied. No token provided');
    try{
        const decoded = jwt.verify(token,process.env.PRIVATE_KEY);
        req.user = decoded;
        console.log(req.user);
        next();
    }
    catch(ex){
        res.status(400).send('Invalid token');
    }
}
module.exports = auth;