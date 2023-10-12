//autenticaino de la ruta users
const jwt = require('jsonwebtoken');


exports.authenticateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Acceso denegado' });
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expirado' });
        }
        return res.status(403).json({ message: 'Token no válido' });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error('Error en la verificación del token:', error);
    return res.status(500).json({ message: 'Error en la verificación del token', error: error.message });
  }
}
