# Aplicación de Inicio de Sesión con JWT

# Es solo una app donde pruebo esta nueva herramienta que estoy aprendiendo. 

## Descripción
Esta es una aplicación de inicio de sesión simple que utiliza JSON Web Tokens (JWT) para autenticar a los usuarios. Proporciona una base para la implementación de autenticación en otras aplicaciones y servicios.

## Tecnologías Utilizadas
- **Frontend**: React
- **Backend**: Node.js y Express
- **Base de Datos**: MongoDB (puede sustituirse por cualquier otra base de datos)

## Funcionalidades
- Registro de usuarios
- Inicio de sesión de usuarios
- Generación de tokens JWT
- Protección de rutas con autenticación basada en JWT

## Configuración

### Clonar el Repositorio
Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
Instalar Dependencias
Navega a las carpetas "frontend" y "backend" y ejecuta el siguiente comando para instalar las dependencias en ambas partes de la aplicación:

bash
Copy code
cd frontend
npm install

cd ../backend
npm install
Configuración de Variables de Entorno
En la carpeta "backend", crea un archivo llamado .env con la siguiente configuración:

makefile
Copy code
SECRET=TuClaveSecreta
DB_CONNECTION=URL_de_conexión_de_tu_base_de_datos_MongoDB
Actualizar la URL del Servidor
En la carpeta "frontend", ve a src/utils/auth.js y actualiza la URL del servidor en la variable BASE_URL para que coincida con la ubicación de tu servidor de backend.

Ejecución
Iniciar el Servidor
En la carpeta "backend", ejecuta el siguiente comando para iniciar el servidor de Node.js:

bash
Copy code
npm start
Iniciar la Aplicación Frontend
En la carpeta "frontend", ejecuta el siguiente comando para iniciar la aplicación React en el navegador:

bash
Copy code
npm start
Uso
Abre la aplicación en tu navegador.
Regístrate como nuevo usuario.
Inicia sesión con las credenciales que acabas de crear.
Una vez iniciada la sesión, podrás acceder a las rutas protegidas que requieren un token JWT válido.
