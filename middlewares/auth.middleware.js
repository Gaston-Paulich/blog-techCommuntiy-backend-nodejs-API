const userService = require('../services/user.service');


const authorizationMiddleware = async(req, res, next) => {
  let userBody = req.body;
  let user = await userService.findUniqueUser({_id: userBody.userId});
    let userRole = user.role;
    const allowedRoles = ['admin','blogger','approver'];
  
    if (allowedRoles.includes(userRole)) {
      next();
    } else {
      res.status(403).send('Usuario no autorizado');
    }
  }



  module.exports = {
  
    authorizationMiddleware
}