const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

/* Load UserSchema into the collection Users */
require("./models/User");
/* Execute the passport file which requires Users*/
require("./services/passport");

/* Make app object available to the authRoutes file*/
require("./routes/authRoutes")(app);

/* Connect database */
mongoose.connect(keys.mongoURI);

const app = express();

// Middleware, function that will be run before any route handler in our a[[]]
/* cookieSession takes in a configuration object */
app.use(
    cookieSession({
        // 30 days last cookie
        maxAge: 30 * 24 * 60 * 60 * 100,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
