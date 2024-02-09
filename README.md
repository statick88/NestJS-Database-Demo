# NestJS Database Demo

Este es un proyecto de demostración de NestJS que muestra un "Hola Mundo" y emula la conexión a una base de datos utilizando código JavaScript para generar datos de ejemplo.

## Pasos para ejecutar el proyecto

### 1. Instalación de Node.js

Si aún no tienes Node.js instalado en tu sistema, descárgalo e instálalo desde [Node.js](https://nodejs.org/).

### 2. Clonar el repositorio

Recuerda crear un fork de este repositorio antes de clonarlo.

```bash
git clone https://github.com/tu_usuario/nestjs-database-demo.git
```
3. Instalar las dependencias

```bash

cd nestjs-database-demo
npm install
```
4. Ejecutar la aplicación

```bash

npm run start:dev
```
Esto iniciará el servidor y podrás acceder a la ruta /hello en tu navegador para ver los datos de ejemplo generados por el servicio de base de datos.

5. Contribuir

Si quieres contribuir a este proyecto, ¡te damos la bienvenida! Siéntete libre de crear un issue o enviar un pull request.
Estructura del proyecto

- src/: Contiene el código fuente de la aplicación.
- hello/: Directorio que contiene el controlador de saludo.
- database/: Directorio que contiene el servicio de base de datos.
- package.json: Archivo de configuración de npm que especifica las dependencias del proyecto y los scripts de ejecución.

---

# Actividad: Gestión de Usuarios

En esta actividad, vamos a implementar la funcionalidad de gestión de usuarios en nuestra aplicación NestJS.

## Pasos

1. **Crear el DTO de Usuario**: En el directorio [`src/users/dto`] crea dos archivos: [`create-user.dto.ts`]"src\users\dto\create-user.dto.ts" y [`update-user.dto.ts`] ("src\users\dto\update-user.dto.ts"). Estos archivos definirán la estructura de los datos que se enviarán al crear y actualizar usuarios, respectivamente.

```ts
// src/users/dto/create-user.dto.ts
export class CreateUserDto {
  // Define las propiedades aquí
}

// src/users/dto/update-user.dto.ts
export class UpdateUserDto {
  // Define las propiedades aquí
}
```

2. **Crear el Modelo de Usuario**: En el directorio [`src/users`]("src/users"), crea un archivo [`user.model.ts`]("src\users\user.model.ts"). Este archivo definirá la estructura de los datos del usuario en nuestra aplicación.

```ts
// src/users/user.model.ts
export class User {
  // Define las propiedades aquí
}
```

3. **Crear el Servicio de Usuario**: En el directorio [`src/users`]("src/users"), crea un archivo [`user.service.ts`]("src\users\user.service.ts"). Este servicio manejará la lógica de negocio relacionada con los usuarios.

```ts
// src/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  // Define los métodos aquí
}
```

4. **Crear el Controlador de Usuario**: En el directorio [`src/users`]("src/users"), crea un archivo [`user.controller.ts`]("src/users/user.service.ts"). Este controlador manejará las solicitudes HTTP relacionadas con los usuarios.

```ts
// src/users/user.controller.ts
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Define los métodos del controlador aquí
}
```

5. **Crear el Módulo de Usuario**: En el directorio [`src/users`]("src/users"), crea un archivo [`user.module.ts`]("src\users\user.module.ts"). Este módulo agrupará y proporcionará todos los proveedores relacionados con los usuarios.

```ts
// src/users/user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

6. **Actualizar el Módulo de la Aplicación**: Finalmente, necesitamos importar el [`UserModule`]("src/users/user.model.ts") en nuestro `AppModule`.

```ts
// src/app.module.ts
import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule],
  // ...
})
export class AppModule {}
```

Una vez que hayas completado estos pasos, deberías tener una implementación básica de la gestión de usuarios en tu aplicación NestJS. Puedes probar tu aplicación ejecutando `npm run start:dev` en la terminal.