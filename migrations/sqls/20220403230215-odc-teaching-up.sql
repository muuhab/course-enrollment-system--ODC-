CREATE TABLE odc_teaching (
    id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL,
    trainer_id INTEGER NOT NULL,
    FOREIGN KEY (course_id) REFERENCES odc_courses (id) ,
    FOREIGN KEY (trainer_id) REFERENCES odc_trainers (id) 
);