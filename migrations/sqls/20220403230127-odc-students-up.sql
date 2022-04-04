CREATE TABLE odc_students (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(55) NOT NULL,
    email VARCHAR(50),
    student_phone VARCHAR(55),
    student_address VARCHAR(100),
    college VARCHAR(44),
    create_at TIMESTAMP DEFAULT Now()
);