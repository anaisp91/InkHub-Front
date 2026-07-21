# InkHub-Front

## Descripción

InkHub es una aplicación web desarrollada para facilitar la gestión de estudios de tatuaje. Su objetivo principal es centralizar la información de los clientes y sus consentimientos informados en una única plataforma, sustituyendo la gestión tradicional en papel por una solución digital.

Un estudio puede registrarse en la aplicación y administrar todos los artistas que colaboran con él desde un único panel de control. Cada vez que se registra un nuevo artista, también se crea automáticamente una cuenta de usuario para que, en futuras versiones de la aplicación, pueda acceder a su propio perfil.

La visión a largo plazo de InkHub es que cada artista pueda gestionar sus clientes y consentimientos desde cualquier dispositivo, sin depender del ordenador del estudio, facilitando así el trabajo diario y mejorando la organización del negocio.

---

## Tecnologías utilizadas

- React
- Vite
- Tailwind CSS
- React Router DOM
- Fetch API
- Context API
- JavaScript (ES6+)

---

## Funcionalidades implementadas

### Autenticación

- Registro de estudios.
- Inicio de sesión.
- Protección de rutas mediante autenticación.

### Dashboard del estudio

- Acceso privado para el estudio.
- Navegación entre las diferentes secciones de la aplicación.

### Gestión de artistas

- Crear artistas.
- Visualizar el listado de artistas.
- Consultar el perfil de cada artista.
- Editar la información de un artista.
- Eliminar artistas.

---

## Funcionalidades previstas

- Gestión de clientes.
- Gestión de consentimientos informados.
- Acceso independiente para cada artista.
- Firma digital de consentimientos.
- Gestión de imágenes de perfil.
- Ampliación del panel de administración del estudio.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd frontend
```

### 2. Instalar las dependencias

Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
npm install
```

### 3. Configurar las variables de entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_API_URL=https://inkhub.onrender.com/api
```

Esta variable indica al frontend la dirección del servidor backend desplegado en Render, donde se encuentran disponibles todos los endpoints de la API.

Si deseas ejecutar el backend en local, sustituye la URL anterior por:

```env
VITE_API_URL=http://localhost:3000/api
```

### 4. Ejecutar el proyecto

Inicia el servidor de desarrollo con:

```bash
npm run dev
```

Una vez iniciado, Vite mostrará una dirección similar a:

```text
http://localhost:5173
```

Abre esa dirección en tu navegador para acceder a la aplicación.

### 5. Generar la versión de producción

Para crear la versión optimizada para producción, ejecuta:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist`, lista para ser desplegada en un servicio de hosting como Netlify.

---

## Backend

El backend de InkHub está desarrollado con **Node.js**, **Express** y **MongoDB**, y se encuentra desplegado en **Render**.

**Base URL de la API:**

`https://inkhub.onrender.com`

El frontend consume esta API mediante la variable de entorno `VITE_API_URL`, centralizando todas las peticiones HTTP a través de la capa de servicios (`services`).

Desarrollado por Anaïs Planas

Proyecto Final del Máster Full Stack Development
Neoland 2026
