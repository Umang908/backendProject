const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    if (!req.header('Authorization')) {
        return res.status(401).json({ error: 'No token, authorization denied' });
    }
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token, authorization denied' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(",,",decoded);
      next();
    } catch (error) {
      res.status(401).json({ error: 'Token is not valid' });
    }
};
