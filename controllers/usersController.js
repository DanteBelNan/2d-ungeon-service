const User = require("../models/user");
const database = require("../utils/database");

exports.getAllUsers = async function (req, res, next) {
    req.query = 'select * from users;'
    const users = database.executeQuery();
    //Poner un negocio en el modelo que traiga exactamente a esta query.
    console.log(users)
    return users;
};

exports.getAllTables = async function (req, res, next) {
    req.query = 'SHOW TABLES;'
    const users = database.executeQuery();
    console.log(users)
    return users;
};

exports.addUser = async function (req, res, next) {
  const newUser = new User(req.body);
};

exports.getUser = async function (req, res, next) {

};

exports.updateUser = async function (req, res, next) {

};

exports.deleteUser = async function (req, res, next) {

};

exports.getUserByToken = async function (req, res, next) {

};
