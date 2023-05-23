
# BACKEND - API

Api hecha con node.js y mongoDB 

## Variables de Entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env en la raiz principal del proyecto

`PORT` (El puerto en donde se ejecutará el servidor)

`DB_URL` = mongodb+srv://`username`:`password`+@apptestingcluster.8qjuddb.mongodb.net/?retryWrites=true&w=majority

* Modificar 'username' y 'password' con las credenciales de acesso desde mongodb ATLAS

`JWT_ACCESS_SECRET` (Clave secreta para crear los tokens)

`JWT_ACCESS_SECRET_EXP` (Tiempo de expiracion de los tokens puede ser en (s,h,d) -> '1d')

`HOST_MAIL` (Host del servidor Mail)

`PORT_MAIL` (Puerto del servidor Mail)

`USER_MAIL` (Usuario de autenticacion del servidor Mail)

`PASS_MAIL` (Password de autenticacion del servidor Mail)

`MAIL_MAIL` (Mail REMITENTE del Servidor Mail)
## Instalacion


```bash
  npm install 
  npm start
```
    
## API Reference

### LOGIN

```http
  POST /api/v1/auth/login
```
* Descripción: Este endpoint se utiliza para iniciar sesión en la aplicación.
* Método: POST
* Headers: No requiere autenticación

* Body (JSON):
  ```json
  {
    "personalId": "00000000",
    "password":"myPassword+",
  }

  ```
* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "message": "Autenticacion correcta",
    "user": {...}
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mitoken" 
  }
  ```


### REGISTER

```http
  POST /api/v1/auth/register
```

* Descripción: Este endpoint se utiliza para resgistrate en la aplicación.
* Método: POST
* Headers: No requiere autenticación

* Body (JSON):
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@gmail.com",
    "password":"myPassword+",
    "phoneNumber": "987654321",
    "address": "myAddress",
    "personalId": "00000000",
    "birthDay": "12-12-2012",
    "gender": "male",
    "nationality": "myCountry",
    "cp": "myCodePostal",
  }

  ```
* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "message": "Registro Exitoso",
    "user": {...}
  }
  ```
### FORGOT PASSWORD

```http
  POST /api/v1/auth/forgot-password
```
* Descripción: Este endpoint se utiliza para generar un token y enviar un correo para restablecer tu contraseña.
* Método: POST
* Headers: Requiere autenticación con Bearer token

* Body (JSON):
  ```json
    {
      "email": "johndoe@gmail.com"
    }

  ```

* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "message": "Se envió un correo electrónico para restablecer la contraseña",
    "resetUrl": "urlConRutaDelfront,
  }
  ```

* URL Enviada por Correo :
  `URL_FRONT/confirmPassword?token=miTokenGeneradoDesdeBack`

### RESET PASSWORD

```http
  POST /api/v1/auth/reset-password
```
* Descripción: Este endpoint se utiliza para para restablecer tu contraseña.
* Método: POST
* Headers: No requiere autenticación

* Body (JSON):
  ```json
  {
    "token": "miTokenGeneradoDesdeBack",
    "password": "miNuevaPassword"
  }

  ```

* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "message": "Se restableció la contraseña con éxito",
  }
  ```
