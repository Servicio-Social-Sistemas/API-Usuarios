# Api sistema

Api desarrollada con nodejs, typescript y desplegada en vercel para manejar un sistema de encuestas. Todo la información se almacena en una base de datos no relacional en dynamodb.


 Requisitos para ejecutar el proyecto
1. instalar nodejs 18 [https://nodejs.org/es/](https://nodejs.org/es/) 
2. instalar yarn [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

## Configuración
### Base de Datos
1. Crear una cuenta en aws [https://aws.amazon.com/es/](https://aws.amazon.com/es/)
2. Crear una tabla en dynamodb con el nombre que desees
3. Crear un usuario en aws con permisos de escritura y lectura en dynamodb
4. Crear un archivo .env en la raíz del proyecto con las credenciales de aws y el nombre de la tabla creada en dynamodb

### Ejemplo de archivo .env
```
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
DYNAMODB_TABLE_NAME=
PORT=
```


### Deploy de API en vercel
1. Crear una cuenta en vercel [https://vercel.com/](https://vercel.com/)
2. Crear un proyecto en vercel con el repositorio de github
3. Configurar las variables de entorno en vercel con las credenciales de aws y el nombre de la tabla creada en dynamodb
4. Configurar el archivo de vercel.json 



## Instalación

Realizar un clone del repositorio

```bash
git clone https://github.com/Servicio-Social-Sistemas/API-Usuarios.git
```

instalar las dependencias
    
```bash
yarn install
```


Para ejecutar el proyecto usa
    
```bash
yarn run dev
```

## Esquema de datos

```json
{
  "responses": [
    {"answer1": "rojo"},
    {"answer2": "rojo"},
    {"answer3": "azul"},
    {"answer4": "verde"},
    {"answer5": "verde"},
    {"answer6": "rojo"},
    {"answer7": "azul"}
  ],
  "ubication" :{
    "lat": "-08982",
    "long": "-12332"
  }
}
```

## Endpoints

### POST /api/v1/save

```json
{
  "responses": [
    {"answer1": "rojo"},
    {"answer2": "rojo"},
    {"answer3": "azul"},
    {"answer4": "verde"},
    {"answer5": "verde"},
    {"answer6": "rojo"},
    {"answer7": "azul"}
  ],
  "ubication" :{
    "lat": "-08982",
    "long": "-12332"
  }
}
```

### GET /api/v1/all

```json
[
  {
    "createdAt": "2023-08-06T03:19:05.388Z",
    "ubication": {
      "lat": "12.435435",
      "long": "44.56567"
    },
    "id": "c336bcb4-3248-44f9-ba51-0bac52168088",
    "responses": [
      {
        "answer1": "rojo"
      },
      {
        "answer2": "rojo"
      },
      {
        "answer3": "azul"
      },
      {
        "answer4": "verde"
      },
      {
        "answer5": "verde"
      },
      {
        "answer6": "rojo"
      },
      {
        "answer7": "azul"
      }
    ]
  },
  {
    "createdAt": "2023-08-06T03:19:23.732Z",
    "ubication": {
      "lat": "12.435435",
      "long": "44.56567"
    },
    "id": "c036239e-fb76-41b9-a377-5b933ca2ab90",
    "responses": [
      {
        "answer1": "verde"
      },
      {
        "answer2": "rojo"
      },
      {
        "answer3": "azul"
      },
      {
        "answer4": "azul"
      },
      {
        "answer5": "verde"
      },
      {
        "answer6": "rojo"
      },
      {
        "answer7": "azul"
      }
    ]
  }
]
```

### DELETE /api/v1/delete/:id
```json
{
  "id": "c336bcb4-3248-44f9-ba51-0bac52168088"
}
```	



