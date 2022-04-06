CREATE TABLE odc_questions (
    id SERIAL PRIMARY KEY,
    question_content VARCHAR,
    question_answer VARCHAR(250),
    exam_id INTEGER NOT NULL,
FOREIGN KEY (exam_id)
      REFERENCES odc_exams (id) 
);

INSERT INTO odc_questions (question_content, question_answer, exam_id) 
VALUES ('asdasd','asdasd',(SELECT id FROM odc_exams LIMIT 1));