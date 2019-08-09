// function for timestamping
const moment = require('moment');

//middleware function executed every request 
const logger = (req, res, next) =>{
    console.log(
        req.protocol +
         '://' +
         req.get('host') + 
         req.originalUrl +
         ': '+
         moment().format()
          );
    // next function      
    next();
};

module.exports = logger;