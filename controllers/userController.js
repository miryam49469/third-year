const { where } = require('sequelize');
// const model = require('../models');
const usersRepository=require('../dal/usersRepository')
exports.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Save institute in the database
  usersRepository.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || ""
      });
    });
};
exports.getById = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Save institute in the database
  usersRepository.getById(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || ""
      });
    });
};

  // // Delete a Institute with the specified id in the request
  exports.delete =async (req, res) => {
 

    usersRepository.delete(req.params.id)
      .then(num => {
        if (num == 1) {
          res.send({
            message: ""
          });
        } else {
          res.send({
            message: `not good`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: " id=" + id
        });
      });
  };
  exports.update = async (req, res) => {
    
   
    usersRepository.update(req.params.id,req.body)
      .then(num => {
        if (num == 1) {
          res.send({
            message: " updated successfully."
          });
        } else {
          res.send({
            message: `not!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  with id=" + id
        });
      });
  };

