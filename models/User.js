const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId : String
});

/* Create a new collection named users with userSchema model */
mongoose.model('users', userSchema);