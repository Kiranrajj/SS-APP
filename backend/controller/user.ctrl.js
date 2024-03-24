const User = require("../models/user.model");

//Create User action With Body as Input
exports.createUser = (udata, req, res) => {
  let body = req.body;
  let user = new User({
    name: body.name,
    role: body.role,
    email: body.email,
    phone: body.phone,
    password: body.password,
    godown: body.godown,
  });

  user.save((err, docs) => {
    let user = utils.clone(docs);
    delete user.password;
    UserResponse.createResponse(err, user, res);
  });
};
