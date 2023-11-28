const User = require("../models/users");

exports.getAllUsers = async (req, res) => {
  try {
    const result = await User.find().select("email");
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Users found!",
        result
      })
    }
    res.status(404).send({
      msg: "Users were not created",
      err
    });
  } catch (err) {
    res.status(500).send({
      msg: "Users were not found",
      err
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "User found!",
        result
      })
    }
  } catch (err) {
    res.status(500).send({
      msg: "User was not found",
      err
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });
    const result = await user.save();
    if (result) {
      return res.status(201).send({
        msg: "User created",
        createdUser: {
          url: `http://localhost:3000/users/${result._id}`,
          result
        }
      })
    }
    res.status(500).send({
      msg: "User was not created"
    });
  } catch (err) {
    res.status(500).send({
      msg: "User was not created",
      err
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const update = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    };
    const result = await User.findByIdAndUpdate(req.params.id, update);
    if (result) {
      return res.status(201).send({
        msg: "User updated",
        updateUser: {
          url: `http://localhost:3000/users/${result._id}`,
          result
        }
      })
    }
    res.status(500).send({
      msg: "User was not updated"
    });
  } catch (err) {
    res.status(500).send({
      msg: "User was not updated",
      err
    });
  }
};

exports.patchUser = async (req, res) => {
  try {
    const update = {};
    for (const ops of req.body) {
      update[ops.propName] = ops.value;
    }
    const result = await User.findByIdAndUpdate(req.params.id, update)
    if (result) {
      return res.status(200).send({
        msg: "User patched",
        url: `http://localhost:3000/users/${req.params.id}`
      })
    }
    res.status(500).send({
      msg: "User was not updated"
    });
  } catch (err) {
    res.status(500).send({
      msg: "User was not patched",
      err
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).send({
        msg: "User deleted"
      });
      res.status(500).send({
        msg: "User was not deleted",
        err
      });
    }
  } catch (err) {
    res.status(500).send({
      msg: "User was not deleted",
      err
    });

  }
};