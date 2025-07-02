# 🧪 API REST - Prueba Técnica Backend (NestJS + Prisma + MySQL)

Este proyecto es parte de una prueba técnica cuyo objetivo es demostrar el dominio en el desarrollo de una API REST utilizando NestJS, Prisma ORM y una base de datos relacional MySQL.

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- MySQL
- class-validator
- Swagger

---

## 📦 Instalación

1. Clonar el repositorio:
   ```bash
   git clone <REPO_URL>
   cd <carpeta_del_proyecto>
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar las variables de entorno (ver `.env.example`):
   ```bash
   cp .env.example .env
   ```

4. Crear y aplicar la migración inicial:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Levantar el servidor:
   ```bash
   npm run start:dev
   ```

---

## 🔧 Estructura principal

```
src/
├── user/              # Módulo User
├── message/           # Módulo Message
├── prisma/            # Prisma Service
├── common/filters/    # Filtro global de errores
├── main.ts            # Bootstrap principal
```

---

## 📮 Endpoints disponibles

### Usuario

- `POST /users`  
  Crear un nuevo usuario
  ```json
  {
    "name": "Brandon",
    "email": "brandon@mail.com"
  }
  ```

- `GET /users/:id/messages`  
  Obtener los mensajes de un usuario específico

---

### Mensajes

- `POST /messages`  
  Crear un mensaje asociado a un usuario
  ```json
  {
    "content": "Hola mundo",
    "userId": 1
  }
  ```

---

## 📑 Validaciones implementadas

- Validaciones estrictas con `class-validator`
- Validación de unicidad de email
- Validación de existencia de usuario al crear mensajes
- Filtro global de excepciones (`BadRequest`, `InternalServerError`, etc.)

---

## 📊 Swagger

La documentación completa está disponible en:

```
http://localhost:3000/api
```

---

## 📁 Variables de entorno

Ver `.env.example`.  
Define tus credenciales de base de datos y configuración básica en el archivo `.env`.

---

## ✅ Pruebas unitarias

Se implementaron pruebas unitarias básicas para:

- `UserService`
- `MessageService`

Ejecución:

```bash
npm run test
```

Cobertura (opcional):

```bash
npm run test:cov
```

---

## 📃 Licencia

Uso libre para fines educativos y pruebas técnicas.