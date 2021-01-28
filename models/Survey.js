const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title : String,
    body: String,
    subject: String,
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    recipients: [RecipientSchema],
    // reference to user
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    datesent: Date,
    lastRespond: Date
});

mongoose.model('surveys', surveySchema);