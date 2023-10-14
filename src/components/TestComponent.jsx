import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const TestTokenComponent = () => {
  const [message, setMessage] = useState('');
  const token = Cookies.get('token');

  useEffect(() => {
    // Verifica si hay un token almacenado en las cookies
    if (!token) {
      setMessage('Token no encontrado, acceso denegado.');
      return;
    }

    // Realiza una solicitud al servidor para verificar el token
    axios.get('http://localhost:3001/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage(error,'Token no válido, acceso denegado.');
      });
  }, [token]);

  return (
    <div>
      <h1>Prueba de Token</h1>
      <p>{message}</p>
      <p>{token}</p>
    </div>
  );
};

export default TestTokenComponent;
