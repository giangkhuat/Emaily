const passport = require("passport");

/*
But our app is not seen here, so we can export these routes  to pass  as a function in index.js  and pass app as an argument to it 
*/

/* Test when user navigates to this url, we want to kick them into the oauth flow, managed by passport.authenticate
 * GoogleStrategy internally has an identifier which is the string "google', so passport authenticate knows to use googlestrategy
 * scope are the information we want from google about users
 
  Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
 */

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  /* Google strategy will figure out exchanging code and get the user profile*/
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    // logout() kill the cookie
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
