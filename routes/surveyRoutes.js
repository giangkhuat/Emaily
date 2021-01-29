const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireSurveyCredits = require('../middlewares/requireSurveyCredits');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app  => {
    // Create survey and email objects
    app.post('/api/surveys', requireLogin, requireSurveyCredits, async (req, res) => {
          console.log(req.body);
          const {title, subject, body, recipients} = req.body; 
          const survey = new Survey({
              title, 
              subject,
              body,
              recipients: recipients.split(',').map(recipient => ({ email: recipient.trim() })),
              // this id is mongoose defined id
              _user: req.user.id,
              dateSent: Date.now(),

          });
          // create mail and send 
          const mailer = new Mailer(survey, surveyTemplate(survey));
          try {
            await mailer.send();
            await survey.save();
            // deduct credits
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
          } catch (err) {
              res.status(422).send(err);
          }
          
    });
};