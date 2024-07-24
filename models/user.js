const User = {
   user_id: {
      type: Number
   },
   username: {
      type: String
   },
   email: {
      type: String
   },
   //Validar que email sea valido
   password: {
      type: String
   }
   //Validar que pwd sea valida
}

module.exports = {
   User
}