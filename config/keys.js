// which environment to return
if (process.env.NODE_ENV == 'production') {
    // return prod set of keys
    module.exports = require('./prod');
} else {
   module.exports = require('./dev');
}