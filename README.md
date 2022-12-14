# GSP-Frontend

#### Proyecto 1 2022.2
Repositorio para aplicación frontend del proyecto de Traza de PQRSF para la Secretaría General de la Universidad del Cauca.
Este proyecto está desarrollado usando príncipalmente React, con la ayuda de otras librerías.
A continuación se va a dar una guía breve para empezar a trabajar en el desarrollo de la aplicación de forma colaborativa y ágil.


# Configuración

En primer lugar **clone el repositorio**, para trabajar en un ambiente aislado cree un **ambiente virtual**.
Para intalar las dependencias del projecto es necesario que tenga instalado [node js](https://nodejs.org/es/)

### Instale las dependencias
Para instalar las dependencias del proyecto, use el comando

```
npm install
```

### Ambiente Virtual
Para correr el proyecto en modo de desarrollo usar el comando 
```
npm run dev
```

# Manejo de Versiones
Para el manejo de versiones se decidió utilizar la estrategia de ramas de **GitHub Flow**, porque tanto el tamaño del equipo de desarrollo como el alcance del proyecto son pequeños.
En conjunto con la metodología **Kanban**, se van a utilizar una rama por cada tarea, con el fin de mantener un bajo nivel de conflictos de integración.
> Para más información sobre **Github Flow** revise el siguiente enlace: https://docs.github.com/en/get-started/quickstart/github-flow
### Creación de Ramas
La creación de cada rama lleva el siguiente formato
```
git checkout -b "nombre_de_tarea"
```
El **nombre de la rama** debe coincidir con la **tarea** a cumplir en el tablero **Kanban** en **Trello**
>El tablero **Kanban** puede se puede acceder desde el siguiente enlace: https://trello.com/b/j0acPIiE/gsp

Para trabajar desde la nueva rama puede bajar los cambios de la rama principal así
```
git pull --rebase origin master
```
Suba los cambios a la rama nueva no a la rama principal
```
git push origin "nombre_de_tarea"
```
Antes de integrar la rama de característica de la tarea a la rama principal master, la funcionalidad debe ser aprobada por el equipo de pruebas.
Para que los cambios sean aprobados, cree un **Pull Request** desde github una vez de la tarea por terminada.
El flujo de trabajo se puede ver ejemplificado en el siguiente diagrama
```mermaid
sequenceDiagram
master ->> tarea 1: Nueva rama de característica
tarea 1 ->> tarea 1: Commit y pull request
tarea 1 ->> master: Integración
master --x tarea 2: Pull para resolver conflictos
tarea 2 ->> tarea 2: Commit y pull request
tarea 2 ->> master: Integración
Note right of tarea 2: Procure resolver conflictos<br/>antes de hacer un<br/>pull request.
```
