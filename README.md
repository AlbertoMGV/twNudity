# twnudity 📚

<!-- TABLE OF CONTENTS -->
## Tabla de contenidos

* [Información](#información)
  * [Componentes](#componentes)
* [Como empezar](#como-empezar)
  * [Prerequisitos](#prerequisitos)
  * [Instalación](#instalación)
* [Uso](#uso)
* [Contribuidores](#contribuidores)
* [Creditos](#creditos)




<!-- ABOUT THE PROJECT -->
## Información

twNudity es un proyecto para la detección de contenido adulto en usuarios de Twitter. Para ello analiza la foto de perfil y la foto de fondo del usuario y por cada una de ellas dos, las evalua en dos categorias, si contienen pornografia y si contienen contenido sexy, es decir, contenido explicito que no llega a ser pornografia. Los resultados se muestran en porcentajes de probabilidad. Desarrollado con NodeJS. Utiliza la API de Twitter para obtener toda la información del usuario, y Tensorflow.js como libreria de machine learning para clasificar las imagenes. Para ello cuenta con un modelo entrenado y probado con un set de 15.000 fotografias obteniendo un 90% de aciertos.

### Componentes
* [Twitter API](https://developer.twitter.com/en/docs)
* [TensorFlow.js](https://www.tensorflow.org/js)
* [Model](https://github.com/gantman/nsfw_model)


<!-- GETTING STARTED -->
## Como Empezar

To get a local copy up and running follow these simple example steps:

### Prerequisites
* NodeJS
* npm

#### Linux
```sh
$ sudo apt update
$ sudo apt install nodejs
$ sudo apt install npm
```

### Instalación

1. Clonar al repositorio
```sh
git clone https://github.com/AlbertoMGV/twNudity
```

2. Instalar los Node modules

```sh
$ npm install
```

3. Lanzar el proyecto


```sh
$ npm run-script devstart
```

```sh
$ npm start
```

4. Comprobar que funciona

Visita http://localhost:3000/ para verificar que todo funciona.


<!-- CONTRIBUTING -->
## Contribuir

Si quereis mejorar el proyecto o implementar cualquier cosa no dudeis en hacerlo, asi como si necesitais ayuda o cualquier tipo de duda contactad conmigo.

<!-- CONTRIBUTORS -->
## Contribuidores

* **Alberto Miranda**	-	*alberto.miranda@opendeusto.es*	-	[@AlbertoMGV](https://github.com/AlbertoMGV)

## Credits

- Gracias al template [ Tools UI Kit ](https://colorlib.com/wp/template/tools-ui-kit/) de ColorlibHQ.
- Gracias a la librería [ NSFWjs ](https://github.com/infinitered/nsfwjs) by Infinite Red, Inc.
