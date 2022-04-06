CREATE TABLE odc_teaching (
    id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL,
    trainer_id INTEGER NOT NULL,
    FOREIGN KEY (course_id) REFERENCES odc_courses (id) ,
    FOREIGN KEY (trainer_id) REFERENCES odc_trainers (id) 
);

INSERT INTO odc_teaching (course_id,trainer_id) VALUES ((SELECT id FROM odc_courses LIMIT 1),(SELECT id FROM odc_trainers LIMIT 1));