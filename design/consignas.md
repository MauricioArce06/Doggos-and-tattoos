# Consignas

​

## Tecnologías

A continuación se detallan las tecnologías involucradas.

- Frontend: JS, React
- Backend: Typescript, Express, TypeORM, Postgres
  ​

### Aplicación de Frontend:

El proyecto debe contar con…

- Debe contar con una vista de Home
- Debe poseer formularios de registro y login de usuarios. Ambos formularios realizan las solicitudes correspondientes con éxito (no se persiste la sesión).
- Debe poseer una vista en la que el usuario logueado pueda ver su historial de turnos y el estado de cada uno.
- Desde la vista de historial de turnos el usuario debe tener la posibilidad de cancelar un turno que se encuentre activo.
- Debe poseer un formulario para la creación de un nuevo turno. En caso de completarse correctamente todos los datos se debe poder visualizar el turno en el historial.
  ​

### Aplicación de Backend:

El proyecto debe contar con…

- Debe tener configurada la aplicación de Express para trabajar con Typescript.
- Debe tener implementadas las entities de TypeORM:
  Appointment o Turn o Schedule (nombre libre, representa al turno)
  User
  Credential
- Debe tener implementada la ruta correspondiente para login usuario. El controlador de este endpoint pedirá al servicio el check de la contraseña. También debe informar si el usuario no existe o la password es incorrecta.
- Debe tener implementada la ruta correspondiente para el registro del usuario. Se debe validar en middleware que el usuario ya no exista previamente y que los datos necesarios estén completos.
- Debe tener implementada la ruta correspondiente para agendar un turno. Para ello debe proveer de los datos del turno además el ID del usuario que desea registrar el mismo. Se deben validar estos datos en middleware.
- Debe tener implementada la ruta correspondiente para obtener los turnos del usuario. Para ello debe indicar el id del usuario en cuestión validando que exista un usuario con ese id.
  Contraer
