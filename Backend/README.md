
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

### AUTHENTICATE
#### LOGIN

```http
  POST /api/v1/auth/login
```
* Descripción: Este endpoint se utiliza para iniciar sesión en la aplicación por parte del Paciente.
* Método: POST
* Headers: No requiere autenticación
* Body (JSON):

```json
  {
    "personalId": "00000000",
    "password":"myPassword123*",
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


#### REGISTER

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
    "password":"myPassword123*",
    "phoneNumber": "987654321",
    "address": "myAddress",
    "personalId": "00000000",
    "birthDay": "12-12-2012",
    "gender": "male",
    "nationality": "myCountry",
    "cp": "myCodePostal",
  }

```

#### ME

```http
  GET /api/v1/auth/me
```
* Descripción: Este endpoint se utiliza para devolver los datos del usuario(paciente, doctor y administrador).
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Respuesta exitosa (JSON):

```json
  {
    "ok": true,
    "user": {
        "_id": "6476c7e02b92a6182a17f63d",
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "password": "$2b$08$vme8V0CLs5Vcu6HSFYEMSOfcRMXESveyskqfasufFXmBrH0e5UDey",
        "phoneNumber": "987654321",
        "address": "myAddress",
        "personalId": "00000000",
        "birthDay": "2012-12-12T05:00:00.000Z",
        "gender": "male",
        "nationality": "myCountry",
        "cp": "myCodePostal",
        "rol": "patient",
        "__v": 0
    }
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
#### FORGOT PASSWORD

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

#### RESET PASSWORD

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

#### LOGIN STAFF

```http
  POST /api/v1/auth/staff/login
```
* Descripción: Este endpoint se utiliza para iniciar sesión en la aplicación por parte del Administrador y del Doctor.
* Método: POST
* Headers: No requiere autenticación
* Body (JSON):

```json
  {
    "personalId": "admin",
    "password":"admin123",
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
### SPECIALTY

#### STORE SPECIALTY
```http
  POST /api/v1/specialty
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
  GET /api/v1/specialty
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
  GET /api/v1/specialty/idSpecialty
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
  PUT /api/v1/specialty/idSpecialty
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
  DELETE /api/v1/specialty/idSpecialty
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
  POST /api/v1/doctor
```
* Descripción: Este endpoint se utiliza para crear nuevos doctores.
* Método: POST
* Headers: Requiere autenticación con Bearer token
* Body (JSON):

  ```json
  {
    "name": "Rosa Elias",
    "personalId": "87654321",
    "email": "rosaelias@gmail.com",
    "license": "123456",
    "phoneNumber": "555-1234",
    "nationality": "peru",
    "gender": "male",
    "cp": "233",
    "birthDay": "10-17-2000",
    "address": "mi casa",
    "specialties": [
      "646c37439d97a5fe240ac058",
      "646c37a39d97a5fe240ac05d"
    ],
    "daysOfWeek": [
        "Monday",
        "Friday"
    ],
    "appointmentDuration": 60,
    "startTime": "10:00",
    "endTime": "20:00"
  } 

  ```

* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "message": "Se ha guardado con exito la cuenta de Rosa Elias con el personalId de 87654321 "
    }
  }
  ```

#### GET ALL DOCTORS
```http
  GET /api/v1/doctor
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
            "_id": "6476ca0b2b92a6182a17f65a",
            "name": "Rosa Elias",
            "email": "rosaelias@gmail.com",
            "license": "55555555",
            "birthDay": "2000-10-17T05:00:00.000Z",
            "nationality": "peru",
            "address": "mi casa",
            "personalId": "87654321",
            "cp": "233",
            "gender": "male",
            "phoneNumber": "555-1234",
            "specialties": [
                {
                    "_id": "646c37a39d97a5fe240ac05d",
                    "name": "Geriatría",
                    "active": true,
                    "__v": 0
                }
            ],
            "rol": "doctor",
            "active": true,
            "schedule": "6476ca0b2b92a6182a17f65b",
            "password": "$2b$08$lpAQ6dv/EHVtDj5WJA54mehfe6lyBADyi/t4/PKWFvEMsfoEv3oUm",
            "__v": 0
        },
        {
            "_id": "64765d58109eec57cba9a293",
            "name": "Manuel Garcia",
            "email": "manuelgarcia@gmail.com",
            "license": "123456",
            "birthDay": "2000-10-17T05:00:00.000Z",
            "nationality": "peru",
            "address": "mi casa",
            "personalId": "12121212",
            "cp": "233",
            "gender": "male",
            "phoneNumber": "555-1234",
            "specialties": [
                {
                    "_id": "646c37439d97a5fe240ac058",
                    "name": "Ginecologia",
                    "active": true,
                    "__v": 0
                },
                {
                    "_id": "646c37a39d97a5fe240ac05d",
                    "name": "Geriatría",
                    "active": true,
                    "__v": 0
                }
            ],
            "rol": "doctor",
            "active": true,
            "schedule": "64765d58109eec57cba9a294",
            "password": "$2b$08$BrM84m1N4KZc2rufbUg1JefYSpWntpzsgNBylmRzmUEk4x.eUkAXa",
            "__v": 0
        },{...}
    ]
  }
  ```

#### GET ONE DOCTOR
```http
  GET /api/v1/doctor/idDoctor
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
        "_id": "64765d58109eec57cba9a293",
        "name": "Manuel Garcia",
        "email": "manuelgarcia@gmail.com",
        "license": "123456",
        "birthDay": "2000-10-17T05:00:00.000Z",
        "nationality": "peru",
        "address": "mi casa",
        "personalId": "12121212",
        "cp": "233",
        "gender": "male",
        "phoneNumber": "555-1234",
        "specialties": [
            {
                "_id": "646c37439d97a5fe240ac058",
                "name": "Ginecologia",
                "active": true,
                "__v": 0
            },
            {
                "_id": "646c37a39d97a5fe240ac05d",
                "name": "Geriatría",
                "active": true,
                "__v": 0
            }
        ],
        "rol": "doctor",
        "active": true,
        "schedule": "64765d58109eec57cba9a294",
        "password": "$2b$08$BrM84m1N4KZc2rufbUg1JefYSpWntpzsgNBylmRzmUEk4x.eUkAXa",
        "__v": 0
    }
  }
  ```
 #### GET CALENDAR
```http
  GET /api/v1/doctor/idDoctor/calendar
```
* Descripción: Este endpoint se utiliza para mostrar los dias del mes actual en que atiende un doctor en especifico.
  - day: es el numero del dia
  - availableAppointmentSlots: es el numero de citas disponibles que quedan en ese dia
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Params: idDoctor
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "calendar": [
        {
            "day": 5,
            "availableAppointmentSlots": 10
        },
        {
            "day": 7,
            "availableAppointmentSlots": 10
        },
        {...}
    ]
  }
  ```
  
#### UPDATE DOCTOR
```http
  PUT /api/v1/doctor/idDoctor
```
* Descripción: Este endpoint se utiliza para editar un doctor en especifico.
* Método: PUT
* Headers: Requiere autenticación con Bearer token
* Params: idDoctor
* Body (JSON):

  ```json
  {
    "name": "Rosa Elias NUEVO",
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
        "_id": "64765d58109eec57cba9a293",
        "name": "Rosa Elias NUEVO",
        "email": "juan.perez@example.com",
        "license": "123456",
        "birthDay": "2000-10-17T05:00:00.000Z",
        "nationality": "peru",
        "address": "mi casa",
        "personalId": "12121212",
        "cp": "233",
        "gender": "male",
        "phoneNumber": "555-1234",
        "specialties": [
            "646c37439d97a5fe240ac058",
            "646c37a39d97a5fe240ac05d"
        ],
        "rol": "doctor",
        "active": true,
        "schedule": "64765d58109eec57cba9a294",
        "password": "$2b$08$BrM84m1N4KZc2rufbUg1JefYSpWntpzsgNBylmRzmUEk4x.eUkAXa",
        "__v": 0
    }
  }
  ```

#### REMOVE DOCTOR
```http
  DELETE /api/v1/doctor/idDoctor
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
  GET /api/v1/doctor/specialty/idSpecialty
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
            "_id": "64716d94b453d0929049610a",
            "name": "Juan Pérez",
            "email": "juan.perez@gmail.com",
            "license": "123456",
            "birthDay": "2000-10-17T05:00:00.000Z",
            "nationality": "peru",
            "address": "mi casa",
            "personalId": "12345678",
            "cp": "233",
            "gender": "male",
            "phoneNumber": "555-1234",
            "specialties": [
                {
                    "_id": "646c37439d97a5fe240ac058",
                    "name": "Ginecologia",
                    "active": true,
                    "__v": 0
                },
                {
                    "_id": "646c2bc80cf9c6ef0f9fcdbd",
                    "name": "Cardiologia",
                    "active": false,
                    "__v": 0
                }
            ],
            "rol": "doctor",
            "active": true,
            "schedule": "64716d94b453d0929049610b",
            "password": "$2b$08$EFJ4pRWE/lrBOdHwgKk./.cTDxPMeXBFWoG/Ewq60l2eetbxmgzim",
            "__v": 0
        },
        {...}
    ]
  }
  ```

### APPOINTMENT

#### STORE APPOINTMENT
```http
  POST /api/v1/appointment
```
* Descripción: Este endpoint se utiliza para crear nuevos citas medicas, con el horario asigando por el sistema, se enviara la confirmacion de la nueva cita por email al usuario
* Método: POST
* Headers: Requiere autenticación con Bearer token
* Body (JSON):

  ```json
  {
    "doctor": "64716d94b453d0929049610a",
    "patient": "64681c0dd6c26be85ba34989",
    "appointmentDate": "05/03/2023" //(formato %m %d &Y)
  } 

  ```

* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "appointment": {
        "_id": "647d62258550b26332e86971",
        "doctor": {
            "_id": "64716d94b453d0929049610a",
            "name": "Juan Pérez",
            "email": "juan.perez@gmail.com",
            "license": "123456",
            "birthDay": "2000-10-17T05:00:00.000Z",
            "nationality": "peru",
            "address": "mi casa",
            "personalId": "12345678",
            "cp": "233",
            "gender": "male",
            "phoneNumber": "555-1234",
            "specialties": [
                "646c37439d97a5fe240ac058",
                "646c2bc80cf9c6ef0f9fcdbd"
            ],
            "rol": "doctor",
            "active": true,
            "schedule": "64716d94b453d0929049610b",
            "password": "$2b$08$EFJ4pRWE/lrBOdHwgKk./.cTDxPMeXBFWoG/Ewq60l2eetbxmgzim",
            "__v": 0
        },
        "patient": "64681c0dd6c26be85ba34989",
        "specialty": {
            "_id": "646c37439d97a5fe240ac058",
            "name": "Ginecologia",
            "active": true,
            "__v": 0
        },
        "appointmentDate": "2023-06-07T23:00:00.000Z",
        "duration": 60,
        "active": true,
        "__v": 0
    }
  }
  ```

#### GET ALL APPOINTMENT
```http
  GET /api/v1/appointment
```
* Descripción: Este endpoint se utiliza para listar todos las citas medicas.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Respuesta exitosa (JSON):

  ```json
  {
    
    "ok": true,
    "appointments": [
        {
            "_id": "6476bf3aaa9be8bcce862aab",
            "doctor": "64716d94b453d0929049610a",
            "patient": "64681c0dd6c26be85ba34989",
            "appointmentDate": "2023-05-01T15:00:00.000Z",
            "duration": 60,
            "active": true,
            "__v": 0
        },{...}
    ]
  }
  ```

#### GET ONE APPOINTMENT
```http
  GET /api/v1/appointment/idAppointment
```
* Descripción: Este endpoint se utiliza para mostrar una cita medica en especifica.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Params: idAppointment
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "appointment": {
        "_id": "6476bf3aaa9be8bcce862aab",
        "doctor": "64716d94b453d0929049610a",
        "patient": "64681c0dd6c26be85ba34989",
        "appointmentDate": "2023-05-01T15:00:00.000Z",
        "duration": 60,
        "active": true,
        "__v": 0
    }
  }
  ```
#### GET ALL MY APPOINTMENTS
```http
  GET /api/v1/appointment/me
```
* Descripción: Este endpoint se utiliza para mostrar todas las citas medicas del paciente o doctor logueado.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "appointments": [
        {
            "_id": "647d62258550b26332e86971",
            "doctor": {
                "_id": "64716d94b453d0929049610a",
                "name": "Juan Pérez",
                "email": "juan.perez@gmail.com",
                "license": "123456",
                "birthDay": "2000-10-17T05:00:00.000Z",
                "nationality": "peru",
                "address": "mi casa",
                "personalId": "12345678",
                "cp": "233",
                "gender": "male",
                "phoneNumber": "555-1234",
                "specialties": [
                    "646c37439d97a5fe240ac058",
                    "646c2bc80cf9c6ef0f9fcdbd"
                ],
                "rol": "doctor",
                "active": true,
                "schedule": "64716d94b453d0929049610b",
                "password": "$2b$08$EFJ4pRWE/lrBOdHwgKk./.cTDxPMeXBFWoG/Ewq60l2eetbxmgzim",
                "__v": 0
            },
            "patient": "64681c0dd6c26be85ba34989",
            "specialty": {
                "_id": "646c37439d97a5fe240ac058",
                "name": "Ginecologia",
                "active": true,
                "__v": 0
            },
            "appointmentDate": "2023-06-02T23:00:00.000Z",
            "duration": 60,
            "active": true,
            "__v": 0
        },{...}
    ]
  }
  ```
  
#### GET MY PAST APPOINTMENTS
```http
  GET /api/v1/appointment/me
```
* Descripción: Este endpoint se utiliza para mostrar todas las citas medicas pasadas del paciente.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "appointments": [
        {
            "_id": "647d62258550b26332e86971",
            "doctor": {
                "_id": "64716d94b453d0929049610a",
                "name": "Juan Pérez",
                "email": "juan.perez@gmail.com",
                "license": "123456",
                "birthDay": "2000-10-17T05:00:00.000Z",
                "nationality": "peru",
                "address": "mi casa",
                "personalId": "12345678",
                "cp": "233",
                "gender": "male",
                "phoneNumber": "555-1234",
                "specialties": [
                    "646c37439d97a5fe240ac058",
                    "646c2bc80cf9c6ef0f9fcdbd"
                ],
                "rol": "doctor",
                "active": true,
                "schedule": "64716d94b453d0929049610b",
                "password": "$2b$08$EFJ4pRWE/lrBOdHwgKk./.cTDxPMeXBFWoG/Ewq60l2eetbxmgzim",
                "__v": 0
            },
            "patient": "64681c0dd6c26be85ba34989",
            "specialty": {
                "_id": "646c37439d97a5fe240ac058",
                "name": "Ginecologia",
                "active": true,
                "__v": 0
            },
            "appointmentDate": "2023-06-02T23:00:00.000Z",
            "duration": 60,
            "active": true,
            "__v": 0
        },{...}
    ]
  }
  ```
#### GET MY UPCOMING APPOINTMENTS
```http
  GET /api/v1/appointment/me
```
* Descripción: Este endpoint se utiliza para mostrar todas las citas medicas pendientes del paciente o doctor logueado.
* Método: GET
* Headers: Requiere autenticación con Bearer token
* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "appointments": [
        {
            "_id": "647d62258550b26332e86971",
            "doctor": {
                "_id": "64716d94b453d0929049610a",
                "name": "Juan Pérez",
                "email": "juan.perez@gmail.com",
                "license": "123456",
                "birthDay": "2000-10-17T05:00:00.000Z",
                "nationality": "peru",
                "address": "mi casa",
                "personalId": "12345678",
                "cp": "233",
                "gender": "male",
                "phoneNumber": "555-1234",
                "specialties": [
                    "646c37439d97a5fe240ac058",
                    "646c2bc80cf9c6ef0f9fcdbd"
                ],
                "rol": "doctor",
                "active": true,
                "schedule": "64716d94b453d0929049610b",
                "password": "$2b$08$EFJ4pRWE/lrBOdHwgKk./.cTDxPMeXBFWoG/Ewq60l2eetbxmgzim",
                "__v": 0
            },
            "patient": "64681c0dd6c26be85ba34989",
            "specialty": {
                "_id": "646c37439d97a5fe240ac058",
                "name": "Ginecologia",
                "active": true,
                "__v": 0
            },
            "appointmentDate": "2023-06-02T23:00:00.000Z",
            "duration": 60,
            "active": true,
            "__v": 0
        },{...}
    ]
  }
  ```
#### UPDATE APPOINTMENT
```http
  PUT /api/v1/appointment/idAppointment
```
* Descripción: Este endpoint se utiliza para editar una cita medica en especifico.
* Método: PUT
* Headers: Requiere autenticación con Bearer token
* Params: idAppointment
* Body (JSON):

  ```json
  {
    "active": true
  }

  ```

* Respuesta exitosa (JSON):
  ```json
  {
    "ok": true,
    "appointment": {
        "_id": "6476bf37aa9be8bcce862aa3",
        "doctor": "64716d94b453d0929049610a",
        "patient": "64681c0dd6c26be85ba34989",
        "appointmentDate": "2023-05-01T15:00:00.000Z",
        "duration": 60,
        "active": true,
        "__v": 0
    }
  }
  ```
#### REMOVE APPOINTMENT
```http
  DELETE /api/v1/appointment/idAppointment
```
* Descripción: Este endpoint se utiliza para eliminar ua cita medica en especifico (Soft Delete).
* Método: DELETE
* Headers: Requiere autenticación con Bearer token
* Params: idAppointment
* Respuesta exitosa (JSON):

  ```json
  {
    "ok": true,
    "message": "Se eliminó exitosamente"
  }
  ```

