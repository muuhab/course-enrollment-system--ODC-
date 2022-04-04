CREATE TABLE odc_questions (
    id SERIAL PRIMARY KEY,
    question_content VARCHAR(200),
    question_answer VARCHAR(250),
    exam_id INTEGER NOT NULL,
FOREIGN KEY (exam_id)
      REFERENCES odc_exams (id) ON DELETE CASCADE 
);