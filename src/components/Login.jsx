import  { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'; 

function Login() {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
   
    try {
        const response = await axios.post('http://localhost:3001/login', {
          username,
          password,
        });
    
        // Comprueba si la respuesta tiene un token
        if (response.data && response.data.token) {
          const token = response.data.token;
    
          // Guarda el token en una cookie llamada 'token' con una fecha de vencimiento
      Cookies.set('token', token, { expires: 7 }); // 'expires' establece la duración de la cookie en días
          
     // Agrega el token a los encabezados de las solicitudes
     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
     
     

     
          alert('Login exitoso')
          // Redirige al usuario a la página protegida o realiza otra acción necesaria
         navigate('/test-token');
        } else {
          console.log(' La respuesta no contiene un token válido');
        }
      } catch (error) {
        // Manejar errores de inicio de sesión, por ejemplo:
        if (error.response && error.response.status === 401) {
          console.log('Credenciales invalidas');
          alert('Contraseña incorrecta')
        } else {
          // Error de red u otros errores
        }
      }
    }
   
    
    
    
    
    
    

  return (
    <div>
        <h1 className='m-10 text-2xl'>Login</h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;

