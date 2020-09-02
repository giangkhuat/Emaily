const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("./api/stripe", (req, res) => {
    // handle token, reach out to api and finalize the charge
    // update user number of credits
  });
};
