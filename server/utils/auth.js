const jwt = require('jsonwebtoken');
function authenticateToken(req, res, next) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>
    )
}