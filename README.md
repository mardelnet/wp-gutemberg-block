# Press Notes - Gutenberg block for WordPress

## Instalación del plugin
1. Descargue el plugin usando el siguiente enlace: https://drive.google.com/file/d/1mmAbgamdVmg30j2rOOArn_GK-eYH0DED/view?usp=sharing
2. Instale el plugin en su implementación de Wordpress y actívelo.

## Uso del plugin
1. Diríjase a cualquier post o página y agregue un nuevo bloque Gutenberg.
2. Filtre el bloque llamado "Press Notes Block" y agréguelo, un nuevo ítem se agregará al slider de manera automática.
3. Puede agregar más ítems haciendo clic en el bloque y seleccionando la opción "Add Press Note".
4. Puede eliminar alguno de los ítems haciendo clic en el botón "Remove Item" dentro del propio ítem.
5. Utilice el botón "Media Library" que se encuentra en cada ítem para agregar o cambiar la imagen principal.
6. Utilice el botón "Select Data" que se encuentra en cada ítem para agregar o cambiar la fecha.
7. Utilice el ícono que se encuentra en la esquina superior izquierda de cada ítem para cambiar el icono del tipo de ítem.
8. Utilice el campo de texto "Add title" que se encuentra en cada ítem para agregar o cambiar el título.
9. Utilice el campo de texto "Add description" que se encuentra en cada ítem para agregar o cambiar la descripción.
10. Utilice el botón "Add as Featured" para convertir un ítem en destacado.
11. El ítem destacado se mostrará fijo a la derecha del slider.
12. Utilice el botón "Remove as Featured" para remover el ítem destacado.
13. Una vez realizados los cambios, guárdelos.

## Descripción del proyecto
Dentro de la carpeta `src` se encuentran los archivos que permiten editar, utilizar en modo desarrollo y crear la versión de producción del plugin.
Para utilizar la versión de desarrollo, deberá descargar este repositorio, almacenarlo en la carpeta `wp-content/plugins` de su instalación Wordpress y utilizar el comando `npm start`.
Para utilizar la versión de producción, deberá descargar este repositorio, almacenarlo en la carpeta `wp-content/plugins` de su instalación Wordpress y utilizar el comando `npm run build`. Esto generará una nueva carpeta llamada `build` con la versión de producción de este plugin.

Los estilos del proyecto se almacenan en la carpeta `src/styles`. Se ha utilizado SASS para ellos.
La carpeta `src/utils` contiene funciones y otras utilidades que resultan de ayuda para los demás componentes.
Dentro de la carpeta `src/components` se han agregado dos componentes que son empleados por otros de ellos.
La lógica central del proyecto se encuentra en los archivos `edit.js` para el caso del editor web y en `save.js` para el caso del frontend.

