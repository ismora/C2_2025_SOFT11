USE ejemplo; 

-- Insertar usuario
INSERT INTO usuarios (correo, cedula, nombre, contrasenia) 
VALUES ('ana@empresa.com', '123456789', 'Ana Torres', 'secreto123');

-- Insertar certificación
INSERT INTO certificaciones (nombre, institucion, descripcion) 
VALUES ('AWS Solutions Architect', 'Amazon Web Services', 'Certificación en cloud computing');

-- Asignar certificación al usuario (relación N:N)
-- Suponiendo que Ana tiene id=1 y la certificación id=1
INSERT INTO usuario_certificacion (usuario_id, certificacion_id)
VALUES (6, 1);

-- Obtener usuario con sus certificaciones
SELECT u.nombre, u.cedula, c.nombre AS certificacion 
FROM usuarios u
JOIN usuario_certificacion uc ON u.id = uc.usuario_id
JOIN certificaciones c ON uc.certificacion_id = c.id
WHERE u.cedula = '123456789';


-- Usuario
INSERT INTO usuarios (correo, cedula, nombre, contrasenia) 
VALUES ('carlos@tech.com', '987654321', 'Carlos Ruiz', 'clave2024');

-- Certificaciones
INSERT INTO certificaciones (nombre, institucion) 
VALUES 
  ('Google Cloud Engineer', 'Google'),
  ('Azure Administrator', 'Microsoft');

-- Asignar ambas certificaciones a Carlos (id=2)
-- Suponiendo certificaciones id=2 y 3
INSERT INTO usuario_certificacion (usuario_id, certificacion_id)
VALUES (8, 2), (8, 3);


-- Contar certificaciones por usuario
SELECT u.nombre, COUNT(uc.certificacion_id) AS num_certificaciones
FROM usuarios u
LEFT JOIN usuario_certificacion uc ON u.id = uc.usuario_id
GROUP BY u.id;

-- Listar usuarios con certificación de Google
SELECT u.nombre, u.correo 
FROM usuarios u
JOIN usuario_certificacion uc ON u.id = uc.usuario_id
WHERE uc.certificacion_id = 2;



/**************** ERROR ************************/
-- En caso de tener el error ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
FLUSH PRIVILEGES;

