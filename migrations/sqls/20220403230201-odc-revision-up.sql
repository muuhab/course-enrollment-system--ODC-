CREATE TABLE odc_revision(
    id SERIAL PRIMARY KEY,
    student_degree FLOAT NOT NULL,
    total_right_degree FLOAT NOT NULL,
    total_wrong_degree FLOAT NOT NULL,
    create_at TIMESTAMP DEFAULT Now(),
    exam_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    FOREIGN KEY (exam_id)
      REFERENCES odc_exams (id), 
    FOREIGN KEY (student_id)
      REFERENCES odc_students (id) 
);

INSERT INTO odc_revision (student_degree, total_right_degree, total_wrong_degree, exam_id, student_id)
VALUES (321,12,33,(SELECT id FROM odc_exams LIMIT 1),(SELECT id FROM odc_students LIMIT 1));