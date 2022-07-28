const jwt = require('jsonwebtoken');

const key = 'MuchSecretVerySecureSoSafe';
const theSecret = jwt.verify(token, key);
function authenticateToken(req, res, next) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>
    )
}
module.exports = {
    authMiddleware: function({ req }) {
      let token = req.body.token || req.query.token || req.headers.authorization;
  
      if (req.headers.authorization) {
        token = token
          .split(' ')
          .pop()
          .trim();
      }
  
      if (!token) {
        return req;
      }
  
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log('Invalid token');
      }
  
      return req;
    },
    signToken: function({ username, email, _id }) {
      const payload = { username, email, _id };
  
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
  };
  