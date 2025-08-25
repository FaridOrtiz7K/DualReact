# DualReact
 ¡Bienvenido(a) a **DualReact**! Proyecto de la página SIGEH, dividido en frontend con React/Vite y backend en PHP.
 --
##  Arquitectura del Proyecto- **Frontend**: React ejecutándose en Vite, puerto **3000**.- **Backend (PHP)**: Carpeta `php/`, requiere servidor PHP, puerto **8080**.
 ```
 DualReact/
 php/            
 public/         
 src/            
 package.json    
← Backend PHP (requiere iniciar servidor en el puerto 8080)
 ← Archivos públicos estáticos (desde Vite)
 ← Código fuente de React
 ← Dependencias y scripts de ejecución
 vite.config.js  ← Configuración de Vite
 ```
 --
##  Requisitos Previos- Node.js (v14 o superior)- npm o yarn- PHP (v7.4 o superior)- Extensiones PHP necesarias (p. ej. `mysqli`, `PDO`, según tu backend)
--
##  Instalación y Ejecución
 ### 1. Clona el repositorio
 ```bash
 git clone https://github.com/FaridOrtiz7K/DualReact.git
 cd DualReact
 ```
 ### 2. Instala dependencias del frontend
 ```bash
 npm install
 # o si usas yarn:
 # yarn
 ```
 ### 3. Inicia el frontend (React + Vite)
 ```bash
 npm run dev
 # o con yarn:
 # yarn dev
 ```
 Esto levantará el frontend en `http://localhost:3000`.
 ### 4. Inicia el backend (PHP)
 Dentro de la carpeta `php/`, ejecuta:
 ```bash
 cd php
 php -S localhost:8080
 ```
 Esto levantará el backend en `http://localhost:8080`.--
##  Flujo de Trabajo Propuesto
 1. Accede al frontend en `http://localhost:3000`.
 2. El código PHP del backend responderá desde `http://localhost:8080`.
 3. Asegúrate de que las rutas/API del frontend estén correctamente configuradas para apuntar a `http://localhost:8080`.--
##  Scripts Útiles (package.json)
```json
 {
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  }
 }
 ```
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Crea la versión de producción del frontend.
- `npm run serve`: Vista previa local de la versión ya compilada.--

##  Eslint y Configuración Adicional
 El proyecto incluye `eslint.config.js` para mantener consistencia en el código. Se recomienda:- Instalar extensiones de ESLint en tu editor (VS Code, Atom, etc.)- Ejecutar `npm run lint` si añades ese comando, o bien usar ESLint desde el editor.--
##  Despliegue
 1. Genera el build del frontend:
    ```bash
    npm run build
    ```
 2. Aloja los archivos generados (generalmente en `dist/` o según configuración de Vite) en un servidor web.
 3. Inicia el servidor PHP de tu carpeta `php/` en el entorno de producción (puerto configurable según servidor real, si no es localhost:8080).--

##  Notas- Asegúrate que las URLs o rutas usadas en el frontend estén apuntando correctamente al backend (`http://localhost:8080`).- Revisa que no haya conflictos de CORS entre frontend y backend.--
###  Resumen Rápido
 | Componente        | Comando / Acción                          | Puertos             |
 |------------------|-------------------------------------------|---------------------|
 | Frontend (React) | `npm run dev`                             | 3000                |
 | Backend (PHP)    | `php -S localhost:8080`                   | 8080                |
 | Build Frontend   | `npm run build`                           |                     |
 | Visualización    | `http://localhost:3000` / `http://localhost:8080` |             |--

## Desarrollado por FaridOrtiz7K y m3tzly