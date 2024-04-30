SPS Test: Archivo PDF con la documentación del API <br> <br>
URL's del host: <br>
https://spstest-be7416f5a09a.herokuapp.com/api/v1/pokemon <br>
https://spstest-be7416f5a09a.herokuapp.com/api/v1/ability <br>
 <br>
En base a las anteriores se pueden consultar mas así: <br>
https://spstest-be7416f5a09a.herokuapp.com/api/v1/pokemon/bulbasaur <br>
https://spstest-be7416f5a09a.herokuapp.com/api/v1/ability/stench <br>
 <br>
Si necesitas consultar la disponibilidad del API puedes hacerlo aquí: <br>
https://spstest-be7416f5a09a.herokuapp.com/api/v1/pokemon/health <br>
 <br>
Se configuró un API en NodeJS con express para consumir información de un API externa, en local se corre el programa en el puerto 8090  <br>
 <br>
API Endpoints Documentation  <br>
 <br>
BASE API LOCAL: http://localhost:8090/api/v1/pokemon  <br>
 <br>
 URL del repositorio GItHUB:   <br>
 <br>
POKEMON  <br>
 <br>
/pokemon/health  <br>
  GET  <br>
  Descripción: Verifica la disponibilidad de la API de Pokémon.  <br>
  Response:  <br>
    - 200 OK: La API está disponible.  <br>
 <br>

/pokemon  <br>
  GET  <br>
  Descripción: Obtiene todos los Pokémon.  <br>
  Response:  <br>
    - 200 OK: Retorna todos los Pokémon encontrados.  <br>
 <br>

/pokemon/{id}  <br>
  GET  <br>
  Descripción: Obtiene un Pokémon específico por su ID.  <br>
  Parameters:  <br>
    - id: ID del Pokémon a obtener (path parameter).  <br>
  Response:  <br>
    - 200 OK: Retorna el Pokémon encontrado.  <br>
 <br>

ABILITY  <br>
 <br>
/ability/health  <br>
  GET  <br>
  Descripción: Verifica la disponibilidad de la API de Habilidades de Pokémon.  <br>
  Response:  <br>
    - 200 OK: La API está disponible.  <br>
 <br>

/ability  <br>
  GET  <br>
  Descripción: Obtiene todas las habilidades de Pokémon.  <br>
  Response:  <br>
    - 200 OK: Retorna todas las habilidades encontradas.  <br>
   <br>

/ability/{id}  <br>
  GET  <br>
  Descripción: Obtiene una habilidad específica por su ID.  <br>
  Parameters:  <br>
    - id: ID de la habilidad a obtener (path parameter).  <br>
  Response:  <br>
    - 200 OK: Retorna la habilidad encontrada.  <br>
 <br>
  <br>
 <br>
 

Postman:  <br>
 <br>

      {
        
        "info": {  
        
        "_postman_id": "20d49eb8-c887-4c8e-ae5a-570f843009a1",  

        "name": "SPS Test API",  

        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",  

        "_exporter_id": "19637880",  

        "_collection_link": "https://interstellar-meteor-180078.postman.co/workspace/Buisness-directory~a1e119a3-e1f3-4b4a-b4b3-f0d0143bd2c8/collection/19637880-20d49eb8-c887-4c8e-ae5a-570f843009a1?action=share&source=collection_link&creator=19637880"  

    },  

    "item": [  

        {  

            "name": "Get All Pokemons",  

            "protocolProfileBehavior": {  

                "disableBodyPruning": true  

            },  

            "request": {  

                "method": "GET",  

                "header": [],  

                "body": {  

                    "mode": "raw",  

                    "raw": "{\r\n  \"nombre\": \"Fix Ferreterias\",\r\n  \"correo\":\"comprasonline@fixferreterias.com\",\r\n  \"celular\": 5580222611,\r\n  \"ubicacion\": \"ubicacion\",\r\n  \"pagina\": \"https://www.fixferreterias.com/\"\r\n}",  

                    "options": {  

                        "raw": {  

                            "language": "json"  

                        }  

                    }  

                },  

                "url": {  

                    "raw": "http://localhost:8090/api/v1/pokemon",  

                    "protocol": "http",  

                    "host": [  

                        "localhost"  

                    ],  

                    "port": "8090",  

                    "path": [  

                        "api",  

                        "v1",  

                        "pokemon"  

                    ]  

                }  

            },  

            "response": []  

        },  

        {  

            "name": "Get Pokemon by name or ID",  

            "request": {  

                "method": "GET",  

                "header": [],  

                "url": {  

                    "raw": "http://localhost:8090/api/v1/pokemon/bulbasaur",  

                    "protocol": "http",  

                    "host": [  

                        "localhost"  

                    ],  

                    "port": "8090",  

                    "path": [  

                        "api",  

                        "v1",  

                        "pokemon",  

                        "bulbasaur"  

                    ]  

                }  

            },  

            "response": []  

        },  

        {  

            "name": "Get All Abilities",  

            "request": {  

                "method": "GET",  

                "header": [],  

                "url": {  

                    "raw": "http://localhost:8090/api/v1/ability/",  

                    "protocol": "http",  

                    "host": [  

                        "localhost"  

                    ],  

                    "port": "8090",  

                    "path": [  

                        "api",  

                        "v1",  

                        "ability",  

                        ""  

                    ]  

                }  

            },  

            "response": []  

        },  

        {  

            "name": "Get Ability by name or ID",  

            "request": {  

                "method": "GET",  

                "header": [],  

                "url": {  

                    "raw": "http://localhost:8090/api/v1/ability/1",  

                    "protocol": "http",  

                    "host": [  

                        "localhost"  

                    ],  

                    "port": "8090",  

                    "path": [  

                        "api",  

                        "v1",  

                        "ability",  

                        "1"  

                    ]  

                }  

            },  

            "response": []  

        },  

        {  

            "name": "Ask Health",  

            "request": {  

                "method": "GET",  

                "header": [],  

                "url": {  

                    "raw": "http://localhost:8090/api/v1/ability/health",  

                    "protocol": "http",  

                    "host": [  

                        "localhost"  

                    ],  

                    "port": "8090",  

                    "path": [  

                        "api",  

                        "v1",  

                        "ability",  

                        "health"  

                    ]  

                }  

            },  

            "response": []  

        }  

    ] 
    }

