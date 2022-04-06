CREATE TABLE odc_questions (
    id SERIAL PRIMARY KEY,
    question_content VARCHAR,
    question_answer VARCHAR(250),
    exam_id INTEGER NOT NULL,
FOREIGN KEY (exam_id)
      REFERENCES odc_exams (id) 
);

INSERT INTO odc_questions (question_content, question_answer, exam_id) 
VALUES ('content1','answer1',(SELECT id FROM odc_exams LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1))
,('content1','answer1',(SELECT id FROM odc_exams ORDER BY random() LIMIT 1));