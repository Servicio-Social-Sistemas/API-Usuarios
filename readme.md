# Api sistema

Api desarrollada con nodejs para almacenar datos dynamodb

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
### POST /api/v1/save


