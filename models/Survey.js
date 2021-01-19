const mongoose = require('mongoose');
const {Schema} = mongoose.Schema;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title : String,
    body: String,
    subject: String,
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    recipients: [RecipientSchema]
});

mongoose.model('surveys', surveySchema);