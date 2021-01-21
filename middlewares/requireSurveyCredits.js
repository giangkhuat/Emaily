module.exports = (req, res, next ) => {
    // check if user is signed in
    if (req.user.credits < 1) {
        return res.status(403).send({error : " Please add more credits to create survey"});
    }
    next();
  }