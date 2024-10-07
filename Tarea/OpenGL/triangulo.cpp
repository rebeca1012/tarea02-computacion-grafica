/*
    Alumno: Rebeca Ledesma
    Carnet: 15-10771

    Triángulo Equilátero en OPENGL
 */

#include <GL/glut.h>

// Función para dibujar el triángulo
void display() {
    
    glClear(GL_COLOR_BUFFER_BIT);

    
    glBegin(GL_TRIANGLES);
        // Rojo para el vértice 1
        glColor3f(1.0f, 0.0f, 0.0f);  
        glVertex2f(-0.5f, -0.28867513f);
        
        // Verde para el vértice 2
        glColor3f(0.0f, 1.0f, 0.0f);  
        glVertex2f(0.5f, -0.28867513f);
        
        // Azul para el vértice 3
        glColor3f(0.0f, 0.0f, 1.0f);  
        glVertex2f(0.0f, 0.57735027f);
    glEnd();

    
    glFlush();
}

// Función de inicialización que establece el color de fondo, en formato HEX: #1b1e2b
void init() {

    glClearColor(0.10588235f, 0.11764706f, 0.16862745f, 1.0f);
}

// Función principal
int main(int argc, char** argv) {
    // Inicializa GLUT
    glutInit(&argc, argv);

    // Crea una ventana con el título especificado
    glutCreateWindow("Triángulo Equilátero");

    // Tamaño de la ventana
    glutInitWindowSize(1200, 1200);

    // Registra la función de callback para mostrar el triángulo
    glutDisplayFunc(display);

    // Llama a la función de inicialización
    init();

    // Entra en el bucle principal de eventos de GLUT
    glutMainLoop();

    return 0;
}