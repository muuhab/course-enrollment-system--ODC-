CREATE TABLE odc_enroll (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    FOREIGN KEY (student_id) REFERENCES odc_students (id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES odc_courses (id) ON DELETE CASCADE
);