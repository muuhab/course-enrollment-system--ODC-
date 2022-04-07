CREATE TABLE odc_enroll (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    status VARCHAR(200) NOT NULL DEFAULT 'half-time',
    code VARCHAR(200),
    code_time TIMESTAMP,
    expire_after INTEGER DEFAULT 24,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES odc_students (id) ON DELETE CASCADE ,
    FOREIGN KEY (course_id) REFERENCES odc_courses (id) ON DELETE CASCADE 
);

INSERT INTO odc_enroll (student_id, course_id) VALUES ((SELECT id FROM odc_students LIMIT 1),(SELECT id FROM odc_courses LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1));