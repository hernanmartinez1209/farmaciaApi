MVC 

- services
    - Req y Res

- controllers
    - Todo lo relacionado a las acciones que se hace a la base de datos

- router
    - Ruta y el Verbo HTTP


ROUTER HTTP
"/product"
   .GET //? todos los product
   .POST //! crear nuevo product
"/product/:id"
   .GETBYID  //? para ver un solo producto por codigo de barra
   .PATCH    //! para actualizar un product
   .DELETE   //!! para eliminar un product