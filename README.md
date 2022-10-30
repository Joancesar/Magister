# Reto Front End - Magister

El enunciado de este reto nos decía que había que replicar el siguiente diseño:
<a href="https://imgur.com/a/uMVh1xj">Diseño Magister</a>

Se nos dio instrucciones para crear datos de ejemplo en <a href="https://firebase.google.com/docs/firestore">Firestore</a> (Un Cloud que presta Firebase) para después poder consultarlos y mostrarlos en la aplicación, algunos ejemplos de estos datos son las Provincias y Ramas de especialización.

Diseño: 
![Imgur][img]https://i.imgur.com/akFr9qh.jpg[/img]

<a href="https://joancesar.github.io/Magister/">Resultado Final</a>


<br><br>
Este proyecto a sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.


## Instalación
Se recomienda la version node v14 para un correcto funcionamiento.

#### 1º Clonar repositorio
Clona este repositorio `git clone https://github.com/Joancesar/Magister.git`
<br>
Y ve a la carpeta del proyecto `cd Magister`

#### 2º Instalar dependencias
Ejecuta `npm install` para instalar las dependencias (debes tener Node instalado previamente).

#### 3º Instalar Angular cli
Ejecuta `npm install -g @angular/cli@11.0.6` para instalar globalmente Angular CLI 11.0.6
o
Ejecuta `npm install @angular/cli@11.0.6` para instalar localmente Angular CLI 11.0.6

#### 4º Ejecutar servidor de desarrollo

Ejecuta `ng serve`(o `.\node_modules\.bin\ng serve` si lo instalaste localmente)
para lanzar el servidor de desarrollo.

Una vez ejecutado navega hasta `http://localhost:4200/` para ver el proyecto.

#### Compilar version de Producción

Ejecuta `ng build` para compilar el proyecto. Los archivos generados estan el directorio `dist/`. Usa la flag `--prod` para la build de producción.

