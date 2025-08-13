CREATE DATABASE IF NOT EXISTS ejemplo; 
USE ejemplo; 

-- Tabla usuarios
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

-- Modificar la tabla: Agregar una columna.
ALTER TABLE usuarios 
ADD telefono VARCHAR(15); 

-- Modificar la tabla: Eliminar una columna.
ALTER TABLE usuarios 
DROP COLUMN telefono; 

-- Eliminar la tabla usuarios
DROP TABLE usuarios; 


-- Tabla intermedia para relación N:N
CREATE TABLE usuario_certificacion (
    usuario_id INT NOT NULL,
    certificacion_id INT NOT NULL,
    PRIMARY KEY (usuario_id, certificacion_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (certificacion_id) REFERENCES certificaciones(id) ON DELETE CASCADE
);


-- Insertar un registro
INSERT INTO usuarios (correo, cedula, nombre, contrasenia)
VALUES ("maria@ejemplo.com", "123", 'María',  "1");

-- Insertar múltiples registros
INSERT INTO usuarios (correo, cedula, nombre, contrasenia)
VALUES 
    ("jostin@ejemplo.com", "1234", 'Jostin',  "1"),
    ("marta@ejemplo.com", "12345", 'Marta',  "1");
    
    
-- Seleccionar todos los campos
SELECT * FROM usuarios;

-- Seleccionar columnas específicas
SELECT nombre, correo FROM usuarios;

-- Filtrar con WHERE 
SELECT * FROM usuarios WHERE cedula > 124;

-- Filtrar con WHERE los usuarios con la cédula que inicie en 2
SELECT * FROM usuarios WHERE cedula LIKE '2%';

-- Ordenar resultados
SELECT nombre, correo FROM usuarios ORDER BY cedula DESC;

-- Contar registros
SELECT COUNT(*) AS total_usuarios FROM usuarios;

-- Actualizar un registro específico
UPDATE usuarios
SET cedula = 234
WHERE correo = 'maria@ejemplo.com';

-- Actualizar múltiples columnas
UPDATE usuarios
SET nombre = 'Ana López', correo = 'ana.lopez@gmail.com'
WHERE id = 3;

/*
-- Actualizar todos los registros (¡cuidado/peligroso!)
UPDATE usuarios
SET edad = edad + 1;  -- Aumenta 1 año a todos los usuarios.
*/

-- Borrar un registro específico
DELETE FROM usuarios
WHERE correo = 'maria@ejemplo.com';

-- Borrar por ID
DELETE FROM usuarios
WHERE id = 3;

-- Borrar todos los registros (¡cuidado/peligroso!)
DELETE FROM usuarios;  -- Vacía la tabla completamente.
