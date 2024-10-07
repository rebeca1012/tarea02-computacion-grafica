/*
    TRIÁNGULO EQUILATERO EN THREEJS
    Alumno: Rebeca Ledesma
    Carnet: 15-10771

    En este archivo se encuentra el desarrollo del triángulo equilatero
    con ThreeJs.
*/

import * as THREE from 'three'; 

// Creación de la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1b1e2b');  

// Creación de la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; 

// Creación del renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Creación de Geometría, usando BufferGeometry
const geometry = new THREE.BufferGeometry();

// Vértices
const vertices = new Float32Array([
    -0.5, -0.5, 3.0,  
     0.5, -0.5, 3.0,  
     0.0,  0.87, 0.0  
]);

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Colores
const colors = new Float32Array([
    0, 1, 0,  
    0, 0, 1,  
    1, 0, 0   
]);
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Creación del material
const material = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });

// Crear el mesh y agregar el triángulo
const triangulo = new THREE.Mesh(geometry, material);
scene.add(triangulo);

// Animar
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
