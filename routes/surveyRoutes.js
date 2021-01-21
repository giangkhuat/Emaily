const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireSurveyCredits = require('../middlewares/requireSurveyCredits');
const Survey = mongoose.model('surveys');

module.exports = app  => {
    // Create survey and email objects
    app.post('/api/surveys', requireLogin, requireSurveyCredits, (req, res) => {
          console.log(req.body);
          const {title, subject, body, recipients} = req.body; 
          const survey = new Survey({
              title, 
              subject,
              body,
              recipients: recipients.split(',').map(item => {
                      email: item.trim()
              }),
              // this id is mongoose defined id
              _user: req.user.id,
              dateSent: Date.now(),

          });
    });
};