CREATE TABLE Usuario(
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE,
    DNI TEXT NOT NULL UNIQUE,
    codigo TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    clave TEXT NOT NULL,
    claveRecuperacion TEXT NOT NULL,
    rol INTEGER
);

-- Tabla Chat con clave foránea id_usuario1 que hace referencia a Usuario(id)
CREATE TABLE Chat (
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL, 
    fecha_ingreso DATE NOT NULL,
    fecha_edicion DATE NOT NULL,
    id_usuario1 INTEGER REFERENCES Usuario(id),
    id_usuario2 INTEGER REFERENCES Usuario(id)
);

-- Tabla Mensaje con claves foráneas id_chat y id_usuario que hacen referencia a Chat(id) y Usuario(id) respectivamente
CREATE TABLE Mensaje (
    id INTEGER PRIMARY KEY,
    contenido TEXT NOT NULL,
    id_chat INTEGER REFERENCES Chat(id),
    id_usuario INTEGER REFERENCES Usuario(id),
    fecha_ingreso DATE NOT NULL
);

-- Tabla Curso con clave foránea id_director que hace referencia a Usuario(id)
CREATE TABLE Curso (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    ciclo INTEGER,
    id_director INTEGER REFERENCES Usuario(id),
    creditos INTEGER
);

-- Tabla Curso_Profesor con clave foránea id_usuario que hace referencia a Usuario(id)
CREATE TABLE Curso_Profesor (
    id INTEGER PRIMARY KEY,
    id_profesor INTEGER REFERENCES Usuario(id),
    id_curso INTEGER REFERENCES Curso(id)
);


CREATE TABLE Alumno_Curso_Profesor (
    id INTEGER PRIMARY KEY,
    id_alumno INTEGER REFERENCES Usuario(id),
    id_curso_profesor INTEGER REFERENCES Curso_Profesor(id)
);


CREATE TABLE Tipo(
    id INTEGER PRIMARY KEY,
    nombre Text
);


CREATE TABLE Elemento(
    id INTEGER PRIMARY KEY,
    id_curso_profesor INTEGER REFERENCES Curso_Profesor(id),
    id_elemento_padre INTEGER REFERENCES Elemento(id),
    contenido TEXT,
    tipo INTEGER REFERENCES Tipo(id) ,
    complementos TEXT
);


CREATE TABLE Archivo(
    id INTEGER,
    link TEXT,
    fecha_ingreso DATE
);



-- Usuario 1
INSERT INTO Usuario (id,nombre, DNI, codigo, email, clave, claveRecuperacion, rol)
VALUES (1,'Juan Pérez', '12345678A', 'USR001', 'juan@example.com', 'contraseña123', 'claveRecuperacion1', 1);

-- Usuario 2
INSERT INTO Usuario (id,nombre, DNI, codigo, email, clave, claveRecuperacion, rol)
VALUES (2,'María García', '87654321B', 'USR002', 'maria@example.com', 'password456', 'claveRecuperacion2', 2);


-- Crear un chat entre los usuarios 1 y 2
INSERT INTO Chat (id,titulo, fecha_ingreso, fecha_edicion, id_usuario1, id_usuario2)
VALUES (1,'Chat de Juan y María', '4/11/2023', '4/11/2023', 1, 2);

-- Obtener el ID del chat recién creado
-- Este valor dependerá de la base de datos que estés utilizando.
-- Por ejemplo, en SQLite puedes usar "last_insert_rowid()" para obtener el último ID insertado.
-- En otros sistemas de gestión de bases de datos, puedes utilizar funciones o sentencias específicas para obtener el último ID insertado.

-- Insertar mensajes en el chat
INSERT INTO Mensaje (contenido, id_chat, id_usuario, fecha_ingreso)
VALUES ('Hola, María', 1, 1, '4/11/2023');

INSERT INTO Mensaje (contenido, id_chat, id_usuario, fecha_ingreso)
VALUES ('Hola, Juan', 1, 2, '4/11/2023');
