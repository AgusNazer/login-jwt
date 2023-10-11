const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const usuarioExistente = await User.findOne({ username });

        if (usuarioExistente) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        }

        // Crea un nuevo usuario
        const nuevoUsuario = new User({ username, password });

        // Guarda el nuevo usuario en la base de datos
        await nuevoUsuario.save();

        // En este punto, el usuario se ha registrado correctamente
        return res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        return res.status(500).json({ message: 'Error al registrar usuario' });
    }
}
exports.getAllusers = async (req, res) => {
    try {
      
        const users = await User.find();
        return res.status(200).json(users)
    } catch (error) {
        console.error('Error al obtener los usuarios', error);
        return res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
}
