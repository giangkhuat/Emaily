const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const app = express();

/* Load UserSchema into the collection Users */
require("./models/User");
require("./models/Survey");
/* Execute the passport file which requires Users*/
require("./services/passport");

/* Connect database */
mongoose.connect(keys.mongoURI);

// Middleware, function that will be run before any route handler in our a[[]]

app.use(bodyParser.json());

/* cookieSession takes in a configuration object */
app.use(
  cookieSession({
    // 30 days last cookie
    maxAge: 30 * 24 * 60 * 60 * 100,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
/* Make app object available to the authRoutes file*/
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);
/*
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});
*/

if (process.env.NODE_ENV === 'production') {
  // express will serve up production assets
  // like main.js or main.css
  app.use(express.static('client/build'));

  // Express will serve index.js if it 
  // does not recognize the route
  const path = require('path');
  // All previous attempts to load up assets or route in the server side fail
  // go to our client side application
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}




const PORT = process.env.PORT || 5000;
app.listen(PORT);
