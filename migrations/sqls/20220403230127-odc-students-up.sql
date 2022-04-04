CREATE TABLE odc_students (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(55) NOT NULL,
    email VARCHAR(50),
    student_phone VARCHAR(55),
    student_address VARCHAR(100),
    college VARCHAR(44),
    image VARCHAR(255),
    create_at TIMESTAMP DEFAULT Now()
);

-- INSERT INTO odc_students (student_name, email, student_phone, student_address, college, image) VALUES (student_name, 'email', 'student_phone', 'student_address', 'college', 'image')