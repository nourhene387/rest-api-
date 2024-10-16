const mongoose = require('mongoose');
/*************** mongoose Schema  ******************** */
const userSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: Number },
    email: { type: String },

});



/**************** export the model******************* */
module.exports = mongoose.model('User', userSchema);
/**************************************************** */

/******************************************** */
