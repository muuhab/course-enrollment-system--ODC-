CREATE TABLE odc_enroll (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    status VARCHAR(200) NOT NULL DEFAULT 'half-time',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES odc_students (id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES odc_courses (id) ON DELETE CASCADE
);