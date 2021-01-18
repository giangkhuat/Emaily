const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    title : String,
    body: String,
    subject: String,
    // recipients is a array of strings
    recipients: [String]
});

mongoose.model('surveys', surveySchema);