const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  console.log("Inside jwtMiddleware");

  // logic authorise user
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (token) {
      // verify
      try {
        const jwtResponse = jwt.verify(token, process.env.JWTPASSWORD);
        console.log(jwtResponse);
        req.userId = jwtResponse.userId;
        next();
      } catch (err) {
        res.status(401).json("Authorisation failed .. please login!!");
      }
    } else {
      res.status(404).json("Authorisation failed ... Token is Missing!!!");
    }
  } else {
    res.status(404).json("Authorisation failed ... Authorization Header is Missing!!!");
  }
};

module.exports = jwtMiddleware;
