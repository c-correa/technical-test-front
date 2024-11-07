Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Introducción

Este proyecto es una aplicación web que utiliza Next.js, un framework de React que permite la creación de aplicaciones web optimizadas y escalables. La estructura de carpetas y archivos está diseñada para facilitar el desarrollo y la organización del código.

## Estructura de Carpetas

- **app/**: Contiene los componentes de la aplicación y las páginas. Aquí es donde se define la estructura de la interfaz de usuario.
- **public/**: Almacena archivos estáticos como imágenes, fuentes y otros recursos que se pueden servir directamente.
- **styles/**: Contiene los archivos de estilo CSS o módulos CSS que se utilizan para estilizar la aplicación.
- **components/**: Aquí se pueden almacenar componentes reutilizables que se utilizan en diferentes partes de la aplicación.
- **components/ui/**: Aquí se pueden almacenar componentes de UI reutilizables que se utilizan en diferentes partes de la aplicación.
- **hooks/**: Aquí se pueden almacenar los hooks personalizados que se utilizan en la aplicación para hacer las peticiones a la API.
- **lib/**: Aqui se configura el cliente axios para hacer las peticiones a la API y se almacenan los tipos de datos que se utilizan en la aplicación.
- **types/**: Aquí se pueden almacenar los tipos de datos que se utilizan en la aplicación.

## Descripción del Proyecto

Este proyecto es una aplicación web que permite a los usuarios tener el contro total para gestionar productos, pueden crear, actualizar, eliminar y ordenar los productos.


## Tecnologías Utilizadas

- Next.js
- Tailwind CSS
- Shadcn/UI
- Axios
- React Hook Form
- Sonner
- Flowbite
- TypeScript
- Lucide React
- Radix UI
- Next Themes

## Instalación

1. Clona el repositorio Backend [Aquí](https://github.com/c-correa/technical-test-node.git).
2. Clona el repositorio Frontend [Aquí](https://github.com/c-correa/technical-test-front.git).
3. Instala las dependencias con `npm install` o `npm install --legacy-peer-deps`.
4. Inicia el proyecto con `npm run dev`.

## Nota: Es un proyecto de Next.js 15, por lo que es necesario usar la opción `--legacy-peer-deps`.


## Nota: El proyecto Backend se encuentra desplegado en [Render](https://technical-test-api-node.onrender.com) y el Frontend en [Vercel](https://technical-test-front.vercel.app).

al ser un despliegue de manera gratuita la instancia no permanece activa todo el tiempo, es decir, despues de 50 segundos de inactividad la instacia se apaga, si requiere usar la instacia de prod es nesesario comunicarce conmigo via whatsapp y yo prender la instancia para su prueba, de lo contrario puede clonar el backen y prender la api y probrar enun entorno local.

## Nota: Para hacer el cambio de la url de la API en el proyecto Frontend, se debe cambiar en el archivo `lib/axios/clientAxios.ts` en la constante `baseURL`.