# Movies

## Introducción

Corren malos tiempos para las salas de cine. La competencia de internet está dañando la industria, la gente se descarga películas sin pagar por ello. Una sala de proyección ha contactado con nosotros para ayudarles a cambiar la visión que tiene la gente sobre el cine.

La idea es rehacer su sitio web usando Angular. Piensan que si usan las últimas tecnologías la gente los verá de otro modo.

El cine tiene 5 salas diferentes, donde podrás ver 5 películas. La propuesta del cine es proyectar las películas favoritas de la gente en lugar de los últimos estrenos. Tu tarea será ayudar a decir qué películas programar.

![](https://imgur.com/nPVcCjj.jpg)

## Objetivo

- Crear un servicio Angular para compartir información con todos los componentes de tu aplicación.
- Crear rutas de Angular con parámetros.
- Crear componentes conectados entre si.

## Instrucciones de entrega

1. Acepta la asignación de classroom.
2. Clona el repositorio con las instrucciones.
3. Selecciona el directorio clonado en un terminal.
4. Crea la aplicación de Angular con el siguiente comando:
```sh
        ng new movies --directory ./client
```
5. Realiza la aplicación, trabajando por ramas.
6. Haz un merge a la rama `main` cuando tengas la versión definitiva.
7. Realiza el deploy de la aplicación al servidor que consideres. Recuerda que el backend lo tendrás que desplegar en otro servidor diferente al frontend (directorio `client`)
8. Modifica el archivo `readme.md` de la aplicación para enlazar la url de la aplicación desplegada.

## Modalidad

- Trabajo individual, plazo de entrega 02/05/24.
- El feedback a los proyectos se dará de manera individual vía classroom.


### Iteración 1 | Creación del Servicio

Primero, crea un servicio Angular (`MovieService`) que sirva toda la información de películas.

#### Backend - Movies

Nuestro backend correrá con [JSON-SERVER](https://www.npmjs.com/package/json-server) leyendo el fichero `movies.json` de la carpeta de backend. Este fichero contiene una colección de películas con la siguiente información:

- **`id`** (Number) - Identificador único para distinguir las películas.
- **`title`** (String) - título.
- **`poster`** (String) - URL de un póster.
- **`synopsis`** (String) - Descripción breve.
- **`genres`** (Array of strings) - Géneros de la película: "Adventure", "Action", "Romantic Comedy" etc.
- **`year`** (Number) - Año de estreno.
- **`director`** (String) - Director.
- **`actors`** (Array of strings) - Nombre de los actores principales.


#### Métodos

En el servicio implementa dos métodos que se usarán después. Los métodos son:

- **`getMovies()`** - Devuelve un array de todas las películas.
- **`getMovie(id)`** - Recibe un id de película como parámetro y devuelve el objeto correspondiente.

### Iteración 2 | Rutas

En la segunda iteración del ejercicio, crea dos rutas diferentes.

En la página principal de la aplicación mostraremos un lista de películas. Cuando se clique sobre una película se irá al detalle correspondiente.

1. Crea dos componentes para mostrar la información: `HomeComponent` y `MovieComponent`.

2. Crea las rutas:
   - `/home`, that will render the `HomeComponent` component.
   - `/movie/:id`, that will render the `MovieComponent` component.


### Iteration 3 | Home Page

En `HomeComponent` carga todas las películas usando el service  `Movie` y añade un vínculo al detalle de cada película.

Recuerda que estamos tratando de revolucionar el mundo del cine y convertir a todos los milenials. Añade un estilismo impactante a la página.

![](https://imgur.com/ho1XP03.png)

### Iteración 4 | Movie Page

Mostraremos ahora los detalles de cada película. Utilizaremos el service `Cinema` para cargar toda la información de una película. En esta página desplegaremos todos los detalles además de un botón para volver atrás.
Dale tu toque personal a la página.

![](https://imgur.com/kTenY67.png)

### Iteración 5: BONUS TRACK
- Crea un componente para asociar una película a una sala (`RoomComponent`). Para ello tendrás que incorporar un elemento nuevo al array movies que se llame: `salas` y que tenga:
- **`id`** (Number) - Número de la sala valor entre 1 y 5.
- **`hours`** (Array of strings) - Horario de proyección. ejemplo: `Wednesday 19:30, 22:30` Indica que se puede ver la película los miércoles a las  19:30h y a las 22:30h.
- **filmId** (number) - Id de la película que se quiera proyectar.

- Crea un servicio para salas (`RoomService`) que permita asociar una película a una sala.

- Crea un filtro por salas en `HomeComponent`.
- Añade el detalle de sala y hora de proyección al detalle de la película