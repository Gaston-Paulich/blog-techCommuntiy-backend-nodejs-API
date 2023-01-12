// imports
const Joi = require('joi');
const {
    userSchema,
    userRegisterSchema,
    userLoginSchema } = require('../validators/user.validator');

// middlewares
const validateUserEditReq = async(req, res, next) => {
    try {
       await userSchema.validateAsync(req.body);
        next();

    } catch (error) {
        next(error);
    }
}

const validateRegisterReq = async(req, res, next) => {
    try {
        
       await userRegisterSchema.validateAsync(req.body);
        next();

    } catch (error) {
        next(error);
    }
}

const validateLoginReq = async(req, res, next) => {
    try {
        
        await userLoginSchema.validateAsync(req.body);
         next();
 
     } catch (error) {
         next(error);
     }
}

const authorizationMiddleware = (req, res, next) => {
    const userRole = req.user.role;
    const allowedRoles = ['admin','blogger','approver'];
  
    if (allowedRoles.includes(userRole)) {
      next();
    } else {
      res.status(403).send('Usuario no autorizado');
    }
  }
  

// exports
module.exports = {
    validateUserEditReq,
    validateRegisterReq,
    validateLoginReq,
    authorizationMiddleware
}