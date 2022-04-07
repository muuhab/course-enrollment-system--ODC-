CREATE TABLE odc_students (
    id SERIAL PRIMARY KEY ,
    student_name VARCHAR(55) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    student_phone VARCHAR(55) NOT NULL,
    student_address VARCHAR(100),
    college VARCHAR(44),
    image VARCHAR,
    create_at TIMESTAMP DEFAULT Now()
);

INSERT INTO odc_students (student_name, username, email, password, student_phone, student_address, college,image) VALUES ('student_name' ,'username' ,'email' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username2' ,'emailsadf2' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username3' ,'email2' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username213' ,'emai45l22' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username5' ,'email3' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username24' ,'emai42l2' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username7' ,'email4' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username12' ,'email11122' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username9' ,'email5' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username42' ,'email344122' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username11' ,'email6' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username32' ,'emai421s12l2' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username13' ,'email7' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username22' ,'emai4s12l2' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username15' ,'email8' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username122' ,'emai1s24l2' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image'),
('student_name' ,'username17' ,'email9' ,'$2a$10$ZnVvCifTLIFIia/Zms2xoOJJsY0wExwV.huT4jXZpF6w35trtj7ye' ,'student_phone' ,'student_address' ,'college' ,'image') ,('student_name' ,'username52' ,'emai124l2' ,'$2a$10$WgBr5z5Hwvd6y1TAOUBy5uo8G7INAo054I3i98UW/0./hnt9dE8du' ,'student_phone2' ,'student_address' ,'college' ,'image');