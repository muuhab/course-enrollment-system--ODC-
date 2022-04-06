CREATE TABLE odc_enroll (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    active BOOLEAN NOT NULL DEFAULT FALSE,
    status VARCHAR(200) NOT NULL DEFAULT 'half-time',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES odc_students (id) ,
    FOREIGN KEY (course_id) REFERENCES odc_courses (id) 
);

INSERT INTO odc_enroll (student_id, course_id) VALUES ((SELECT id FROM odc_students LIMIT 1),(SELECT id FROM odc_courses LIMIT 1))