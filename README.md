# Proyecto To-Do List

El proyecto está basado para llevar el control de las tareas y metas que se tienen planeadas para una fecha límite.

Con el programa se podrá crear y eliminar las tareas que ya hayan sido completadas.

## Información

El proyecto utiliza las siguientes tecnologías.
- Node JS (Motor)
- React
- Bootstrap
- JavaScript
- Docker

> __NOTA IMPORTANTE__: El codigo ya tiene implementada el consumo de una API la cual realizar consultas al backend; el backend se tiene de manera independiente en otro proyecto.

## Instrucciones

> Para correr el proyecto es necesario contar con las dependencias de Node JS, posterior a ello ejecutar el comando: __npm start__
>

>El proyecto ya cuenta con la creación de un contenedor, por lo que se agrega el archivo Dockerfile para las instrucciones necesarias en la imagen a crear.
>
>Para crear la imagen ejecutar el siguiente comando:
> - __docker build -t docker-react-image:1.0 .__        
>
>Para crear una instancia o contenedor ejecutar el siguiente comando:
> - __docker run -p 4000:80 --name docker-react-container docker-react-image:1.0__


El proyecto cuando solo con una ventana en la cual puede visualizar las tareas en cola y también podrá crear una nueva tarea.