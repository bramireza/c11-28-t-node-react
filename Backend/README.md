
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
* Headers: No requiere autenticación
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
    "resetUrl": "urlConRutaDelfront",
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
### SPECIALTY

#### STORE SPECIALTY
```http
  POST /api/v1/auth/specialty
```
* Descripción: Este endpoint se utiliza para crear nuevas especialidades.
* Método: POST
* Headers: Requiere autenticación con Bearer token
* Body (JSON):

  ```json
  {
    "name": "Endocrinología"
  }  

  ```

* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "specialty": [
        {
            "_id": "646c37439d97a5fe240ac058",
            "name": "Endocrinología",
            "active": true,
            "__v": 0
        }
    ]
  }
  ```

#### GET ALL SPECIALTIES
```http
  GET /api/v1/auth/specialty
```
* Descripción: Este endpoint se utiliza para listar todas las especialidades.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "specialties": [
        {
            "_id": "646c37439d97a5fe240ac058",
            "name": "Ginecologia",
            "active": true,
            "__v": 0
        },
        {
            "_id": "646c379b9d97a5fe240ac05b",
            "name": "Dermatologia",
            "active": true,
            "__v": 0
        },
        {...}
    ]
  }
  ```

#### GET ONE SPECIALTY
```http
  GET /api/v1/auth/specialty/idSpecialty
```
* Descripción: Este endpoint se utiliza para mostrar una especialidad en especifico.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Params: idSpecialty
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "specialty": {
        "_id": "646c2bc80cf9c6ef0f9fcdbd",
        "name": "Cardiologia",
        "active": true,
        "__v": 0
    }
  }
  ```
#### UPDATE SPECIALTY
```http
  PUT /api/v1/auth/specialty/idSpecialty
```
* Descripción: Este endpoint se utiliza para editar una especialidad en especifico.
* Método: PUT
* Headers: Requiere autenticación con Bearer token
* Params: idSpecialty
* Body (JSON):

  ```json
  {
    "name": "Ginecologia"
  } 

  ```

* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "specialty": {
        "_id": "646c2bc80cf9c6ef0f9fcdbd",
        "name": "Ginecologia",
        "active": true,
        "__v": 0
    }
  }
  ```

#### REMOVE SPECIALTY
```http
  DELETE /api/v1/auth/specialty/idSpecialty
```
* Descripción: Este endpoint se utiliza para eliminar una espcialidad en especifico (Soft Delete).
* Método: DELETE
* Headers: Requiere autenticación con Bearer token
* Params: idSpecialty
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "message": "Se eliminó exitosamente"
  }
  ```
### DOCTOR

#### STORE DOCTOR
```http
  POST /api/v1/auth/doctor
```
* Descripción: Este endpoint se utiliza para crear nuevos doctores.
* Método: POST
* Headers: Requiere autenticación con Bearer token
* Body (JSON):

  ```json
  {
    "name": "Juan Pérez",
    "email": "juan.perez@example.com",
    "license": "123456",
    "phoneNumber": "555-1234",
    "specialties": [ 
      "646c37439d97a5fe240ac058",
      "646c2bc80cf9c6ef0f9fcdbd"
    ],
    "schedule": [...]

  } 

  ```

* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "doctor": {
        "name": "Juan Pérez",
        "email": "juan.perez@example.com",
        "license": "123456",
        "phoneNumber": "555-1234",
        "specialties": [
            "646c37439d97a5fe240ac058",
            "646c2bc80cf9c6ef0f9fcdbd"
        ],
        "schedule": [...],
        "active": true,
        "_id": "646ecefa6841988f4894d8e8",
        "__v": 0
    }
  }
  ```

#### GET ALL DOCTORS
```http
  GET /api/v1/auth/doctor
```
* Descripción: Este endpoint se utiliza para listar todos los doctores.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "doctors": [
        {
            "_id": "646e7905f3e66b3cf33bc622",
            "name": "Rosa Mena",
            "email": "rosa.mena@example.com",
            "license": "211212",
            "phoneNumber": "555-1234",
            "specialties": [
                "646c37439d97a5fe240ac058",
                "646c37a39d97a5fe240ac05d"
            ],
            "schedule": [...],
            "active": true,
            "__v": 0
        },
        {
            "_id": "646e7908f3e66b3cf33bc624",
            "name": "Juan Pérez",
            "email": "juan.perez@example.com",
            "license": "123456",
            "phoneNumber": "555-1234",
            "specialties": [
                "646c37439d97a5fe240ac058",
                "646c2bc80cf9c6ef0f9fcdbd"
            ],
            "schedule": [...],
            "active": true,
            "__v": 0
        },{...}
    ]
  }
  ```

#### GET ONE DOCTOR
```http
  GET /api/v1/auth/doctor/idDoctor
```
* Descripción: Este endpoint se utiliza para mostrar un doctor en especifico.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Params: idDoctor
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "doctor": {
        "_id": "646e7908f3e66b3cf33bc624",
        "name": "Juan Pérez",
        "email": "juan.perez@example.com",
        "license": "123456",
        "phoneNumber": "555-1234",
        "specialties": [
            "646c37439d97a5fe240ac058",
            "646c2bc80cf9c6ef0f9fcdbd"
        ],
        "schedule": [...],
        "active": true,
        "__v": 0
    }
  }
  ```
#### UPDATE DOCTOR
```http
  PUT /api/v1/auth/doctor/idDoctor
```
* Descripción: Este endpoint se utiliza para editar un doctor en especifico.
* Método: PUT
* Headers: Requiere autenticación con Bearer token
* Params: idDoctor
* Body (JSON):

  ```json
  {
    "name": "Juan Pérez NUEVO",
    "email": "juan.perez@example.com",
    "license": "123456",
    "phoneNumber": "555-1234",
    "specialties": [ 
      "646c37439d97a5fe240ac058",
      "646c2bc80cf9c6ef0f9fcdbd"
    ],
    "schedule": [...],
    "active": true 
  } 

  ```

* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "doctor": {
        "_id": "646e7908f3e66b3cf33bc624",
        "name": "Juan Pérez NUEVO",
        "email": "juan.perez@example.com",
        "license": "123456",
        "phoneNumber": "555-1234",
        "specialties": [
            "646c37439d97a5fe240ac058",
            "646c2bc80cf9c6ef0f9fcdbd"
        ],
        "schedule": [],
        "active": true,
        "__v": 0
    }
  }
  ```

#### REMOVE DOCTOR
```http
  DELETE /api/v1/auth/doctor/idDoctor
```
* Descripción: Este endpoint se utiliza para eliminar un doctor en especifico (Soft Delete).
* Método: DELETE
* Headers: Requiere autenticación con Bearer token
* Params: idDoctor
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "message": "Se eliminó exitosamente"
  }
  ```

#### FILTER DOCTORS BY SPECIALTY
```http
  GET /api/v1/auth/doctor/specialty/idSpecialty
```
* Descripción: Este endpoint se utiliza para listar los doctores filtrados por especialidad.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Params: idSpecialty
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "doctors": [
        {
            "_id": "646e7905f3e66b3cf33bc622",
            "name": "Rosa Mena",
            "email": "rosa.mena@example.com",
            "license": "211212",
            "phoneNumber": "555-1234",
            "specialties": [
                "646c37439d97a5fe240ac058"
            ],
            "schedule": [...],
            "active": true,
            "__v": 0
        },
        {
            "_id": "646e7908f3e66b3cf33bc624",
            "name": "Juan Pérez",
            "email": "juan.perez@example.com",
            "license": "123456",
            "phoneNumber": "555-1234",
            "specialties": [
                "646c37439d97a5fe240ac058",
                "646c2bc80cf9c6ef0f9fcdbd"
            ],
            "schedule": [...],
            "active": true,
            "__v": 0
        },{...}
    ]
  }
  ```
