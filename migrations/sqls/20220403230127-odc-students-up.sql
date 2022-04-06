CREATE TABLE odc_students (
    id SERIAL PRIMARY KEY ,
    student_name VARCHAR(55) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(50),
    password VARCHAR(255),
    student_phone VARCHAR(55),
    student_address VARCHAR(100),
    college VARCHAR(44),
    image VARCHAR(255),
    create_at TIMESTAMP DEFAULT Now()
);

INSERT INTO odc_students (student_name, username, email, password, student_phone, student_address, college,image) VALUES ('student_name' ,'username' ,'email' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username2' ,'email2' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image');