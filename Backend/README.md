
# BACKEND - API

Api hecha con node.js y mongoDB 


## Variables de Entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env en la raiz principal del proyecto

`PORT` El puerto en donde se ejecutará el servidor

`DB_URL` : mongodb+srv://`username`:`password`+@apptestingcluster.8qjuddb.mongodb.net/?retryWrites=true&w=majority

* Modificar username y password con las credenciales de acesso desde mongodb ATLAS


## Instalacion


```bash
  npm install 
  npm start
```
    
## API Reference

#### Login (POST)

```http
   /api/v1/auth/login
```

Se necesitan enviar los siguientes datos desde el front:
- personalId
- password


#### Register (POST)

```http
   /api/v1/auth/register
```
Se necesitan enviar los siguientes datos desde el front:
- personalId (8 DIGITOS)
- password
- name
- email
- phoneNumber
- birthDay
- address (No necesario)
- gender (No necesario) Elegir entre `male`,`female`,`other`


