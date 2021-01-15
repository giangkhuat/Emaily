const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId : String,
    credits: {
        type: Number,
        default: 0
    }
});

/* Create a new collection named users with userSchema model */
mongoose.model('users', userSchema);