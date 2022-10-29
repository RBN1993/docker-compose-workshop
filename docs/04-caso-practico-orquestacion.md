# Caso práctico - Orquestación con Docker-Compose

Se plantea el siguiente caso práctico.

![caso practico docker compose](../imgs/caso-practico-docker-compose.png)

En la **carpeta caso-practico-docker-compose** se encuentran los proyectos involucrados en el esquema; los cuales hay que Dockerizar individualmente y orquestar su funcionamiento.

Hay que tener en cuenta que la aplicación **devops-db-app** utiliza las siguientes variables de entorno:

- DATABASE_PASSWORD
- DATABASE_HOST
- DATABASE_PORT
- DATABASE_USERNAME
- DATABASE_NAME

También se comparte una posible solución en la carpeta **caso-practico-docker-compose-solucion** a mirar en caso de que nos bloqueemos.