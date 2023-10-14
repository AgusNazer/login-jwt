import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get('token');
    // Realiza la solicitud GET a la ruta protegida '/users'
    axios.get('http://localhost:3001/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log('Respuesta del servidor:', response.data);
        setUsers(response.data); // Actualizar el estado con los datos de usuarios
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar usuarios:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Usuarios</h1>
      {Array.isArray(users) ? (
  <ul>
    {users.map(user => (
      <li key={user._id}>{user.username}</li>
    ))}
  </ul>
) : (
  <p>No se encontraron usuarios.</p>
)}
    </div>
  );
}

export default Users;
