const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   user_id: {
    type: Number
   },
   username: {
    type: String
   },
   email: {
    type: String,
    //validate: [new function(), 'Validame']
   },
   password: {
    type: String
    //validate: [new function(), 'Validame']
   }
})