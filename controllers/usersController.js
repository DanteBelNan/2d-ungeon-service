const User = require("../models/user");
const database = require("../utils/database");

exports.getAllUsers = async function (req, res, next) {
  try{
    let query = 'select * from users;'
    const users = await database.executeQuery(query);
    res.status(200).json({"users": users})
  }catch(err){
    res.status(400).json({"error:": err.message})
  }

};


exports.addUser = async function (req, res, next) {
  try{
    let query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?);"
    let newUser = {
      "username": req.body.username,
      "password": req.body.password,
      "email": req.body.email,
    };

    const confirmation = await database.executeQuery(query,[newUser["username"],newUser["password"],newUser["email"]]);
    if(confirmation["error"]){
      throw new Exception(confirmation["error"]["message"]);
    }
    res.status(200).json({"user": confirmation})
  }catch(err){
    res.status(400).json({"error:": err.message})
  }

};

exports.getUser = async function(req,res,next){
  try{
    let body = req.body
    let query = 'select * from users as U where U.username = ?'
    const result = await  database.executeQuery(query, [req.body.username]);
    res.status(200).json({"result": result})
  }catch(err){
    res.status(400).json({"error:": err.message})
  }
}

exports.updateUser = async function (req, res, next) {

};

exports.deleteUser = async function (req, res, next) {

};

exports.getUserByToken = async function (req, res, next) {

};
