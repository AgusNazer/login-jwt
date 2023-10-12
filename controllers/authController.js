const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
// const secretKey = process.env.SECRET



exports.registerJWT = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario en la base de datos
    const user = new User({
         username, 
         password: hashedPassword 
        });
    await user.save();
    // Genera un token JWT
    const token = jwt.sign({ username: user.username }, process.env.SECRET);
    console.log('Token generado:', token);

    res.json({ token });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ message: "Error al registrar usuario', error: error.message"});
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Busca al usuario por su nombre de usuario en la base de datos
    const user = await User.findOne({ username });

    // Si no se encuentra al usuario, devuelve un mensaje de error
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si el usuario y la contraseña son válidos, genera un nuevo token JWT
    const token = jwt.sign({ username: user.username }, process.env.SECRET, { expiresIn: '1h' });
    console.log('Token generado del login:', token);

    res.json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ message: 'Error en el inicio de sesión', error: error.message });
  }
};

