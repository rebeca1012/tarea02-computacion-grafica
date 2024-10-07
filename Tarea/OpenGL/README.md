
# Triángulo Equilátero OpenGL

Alumno: Rebeca Ledesma
Carnet: 15-10771
API: OpenGL

Este proyecto muestra un triángulo equilátero utilizando OpenGL y GLUT. El triángulo se dibuja con vértices en rojo, verde y azul sobre un fondo oscuro.

Fue desarrollado usando WSL2.

## Requisitos previos

- Sistema operativo compatible con OpenGL y GLUT. En est
- Compilador C++ (g++)
- Bibliotecas de desarrollo OpenGL y GLUT
- Make (para compilación fácil)

Para sistemas basados en Ubuntu, se deben instalar las siguientes dependencias:

```bash
sudo apt update
sudo apt install libgl1-mesa-dev libglu1-mesa-dev freeglut3-dev make
```

## Compilación

Para compilar el proyecto, se deben seguir estos pasos:

1. Abrir una terminal y navegar al directorio del proyecto.
2. Ejecutar el siguiente comando:

```bash
make
```

Esto generará un ejecutable llamado `triangulo`.

## Ejecución

Para ejecutar el programa, usar el siguiente comando en la terminal:

```bash
./trianulo
```

Se abrirá una ventana mostrando el triángulo equilátero colorido.

## Para correr en WSL2

Si estás utilizando WSL2 en Windows, necesitarás configurar un servidor X para mostrar la ventana gráfica. Se recomienda
instalar y ejecutar Xming.
