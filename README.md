This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ARQUITECTURA

Se explica la organizacion del proyecto, explicando carpeta por carpeta

- El codigo esta dentro de [src]

- [app] es la encargada de manejar todo el tema de enrutamiento de aplicacion, asi que aqui se crean las carpetas de acuerdo a la pagina que se quiere mostrar

- [components] contiene todos los UI o componentes de vista, separadas de acuerdo a las pagina principal o ambito de aplicacion

- [hooks] contiene todos los hooks personalizados asi como las configuraciones para manejar el estado con zustand

- [utils] contiene las funciones de ts utililes para algunos servicios o comportamientos de las UI

- [models] contiene la definician de todas la estructura de datos necesaria 

- [Service] contiene los servicios que se encargan de hacer las peticiones a las API

## FUNCIONALIDAD

Se agrego el consultar personaje, agregar y/o quitar favoritos, la visualizacion de mapa, el filtro del personaje por nombre, el detalle del personaje y el guardado y eliminado en localStorage de los favoritos, no se hizo el recuperar ese estado