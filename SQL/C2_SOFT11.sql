CREATE DATABASE IF NOT EXISTS C2_SOFT11;
USE C2_SOFT11;

-- Crear una entidad (tabla)
CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(255) UNIQUE NOT NULL,
    cedula VARCHAR(50) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    contrasenia VARCHAR(255) NOT NULL
);

/*
-- Tabla certificaciones
CREATE TABLE certificaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    institucion VARCHAR(255) NOT NULL,
    descripcion TEXT
);
*/

-- Modificar la tabla: Agregar columna
ALTER TABLE usuarios 
ADD edad INT;

-- Modificar la tabla: Eliminar columna
ALTER TABLE usuarios
DROP COLUMN edad;

-- Eliminar tabla
DROP TABLE usuarios;

-- Tabla intermedia para relaciones N:N
CREATE TABLE usuario_certificacion (
	usuario_id INT NOT NULL,
	certificacion_id INT NOT NULL,
    PRIMARY KEY (usuario_id, certificacion_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (certificacion_id) REFERENCES certificaciones(id) ON DELETE CASCADE
);


-- Insertar un registro
INSERT INTO usuarios (correo, cedula, nombre, contrasenia) 
VALUES ("rbadilla@test.com", "123", "R Badilla", "12");

-- Insertar múltiples registros
INSERT INTO usuarios (correo, cedula, nombre, contrasenia) 
VALUES ("jziñiga@test.com", "1234", "J Zuñiga", "12"),
	   ("mlagos@test.com", "12345", "M Lagos", "12");

-- Seleccionar todos los campos
SELECT * FROM usuarios;