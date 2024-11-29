const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.spit(' ')[1];
    if(!token) return res.status(401).json({error: "Token do not work"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }catch(error){
        res.status(403).json({error: `Token not valid: ${error}`});
    }
}