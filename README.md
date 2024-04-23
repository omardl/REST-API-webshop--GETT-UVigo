# API REST para la web de una tienda

## Objetivo

El objetivo inicial consistió en la creación de una API REST mediante Angular, NodeJS y MongoDB que realice operaciones CRUD permitiendo crear, obtener, modificar o eliminar elementos de una base de datos. **Fue realizado como proyecto para la asignatura "Arquitectura y Servicios Telemáticos" del grado en Ingeniería de Tecnologías de Telecomunicación de la UVigo** y debía estar enfocado a representar una tienda online cuyos artículos serían los que almacena la base de datos, pudiendo elegir cualquier temática para la tienda (comida, componentes electrónicos, ropa, etc).

## Actualmente, está en desarrollo una nueva versión que mejore la original ya que:

- Las versiones de NodeJS y Angular usadas están obsoletas.

- Carecía de diseño, ningún elemento estaba estilado mediante CSS y se limitaba a cumplir el funcionamiento requerido.

- No abarcaba la posibilidad de acceder como administrador o cliente, pudiendo limitar a los usuarios que no inicien sesión como administrador a sólo consultar los elementos. 

## Versión 2.0

Actualmente en desarrollo, tratará de alcanzar los siguientes objetivos:

- Añadir la posibilidad de que sólo aquel que inicie sesión como administrador pueda crear, modificar o eliminar nuevos artículos. Ésto se realizará de manera simple, pudiendo dar pié a implementar un inicio de sesión más sofisiticado usando JWT en una posible versión 3.0.

- Almacenar una imágen de cada artículo junto al resto de sus atributos, lo cual no se realizaba en la primera versión.

- Permitir la posibilidad de buscar artículos por su nombre.

- Otras funcionalidades extra podrán surgir y ser implementadas a lo largo de su desarrollo.

## Vista previa de la nueva versión:

![Home](https://github.com/omardl/REST-API-webshop--GETT-UVigo/assets/105445540/71909c90-510f-4ffd-9048-e15acc74143e)

![Home login](https://github.com/omardl/REST-API-webshop--GETT-UVigo/assets/105445540/89f87ffe-f0a5-4253-97cf-7519ebf2e7c6)

Actualmente el login y la comunicación con el backend para el acceso a la base de datos ya están implementados.

### Autor - Omar Delgado
