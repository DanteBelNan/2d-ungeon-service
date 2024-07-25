const database = require("../utils/database");

exports.getAllTables = async function (req, res, next) {
    try{
      let query = 'show tables;'
      const result = await  database.executeQuery(query);

      res.status(200).json({"result": result})
    }catch(err){
      res.status(400).json({"error:": err.message})
    }
};
