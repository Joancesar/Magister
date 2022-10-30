# Reto Front End - Magister

El enunciado de este reto nos decía que había que replicar el siguiente diseño:
<a href="https://imgur.com/a/uMVh1xj">Diseño Magister</a>

Se nos dio instrucciones para crear datos de ejemplo en <a href="https://firebase.google.com/docs/firestore">Firestore</a> (Un Cloud que presta Firebase) para después poder consultarlos y mostrarlos en la aplicación, algunos ejemplos de estos datos son las Provincias y Ramas de especialización.

>Diseño
![Imgur](https://i.imgur.com/akFr9qh.jpg)
![Imgur](https://i.imgur.com/96y8G2u.jpg)
![Imgur](https://imgur.com/PTjLeI6.jpg)
![Imgur](https://imgur.com/2r1Vvot.jpg)
![Imgur](https://imgur.com/V6lyHqV.jpg)
![Imgur](https://imgur.com/yUO2TMD.jpg)
![Imgur](https://imgur.com/V2UIFrO.jpg)
![Imgur](https://imgur.com/nlK6F6L.jpg)


<br>

><strong><a href="https://joancesar.github.io/Magister/">Haz click aquí para ver la aplicación web basada en el diseño</a></strong>


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

