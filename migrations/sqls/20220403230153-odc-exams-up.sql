CREATE TABLE odc_exams (
    id SERIAL PRIMARY KEY,
    create_at TIMESTAMP DEFAULT Now(),
    course_id INTEGER NOT NULL,
    FOREIGN KEY (course_id)
      REFERENCES odc_courses (id) ON DELETE CASCADE 
);