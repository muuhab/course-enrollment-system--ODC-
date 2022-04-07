CREATE TABLE odc_enroll (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL UNIQUE,
    course_id INTEGER NOT NULL,
    status VARCHAR(200) NOT NULL DEFAULT 'half-time' CHECK (status IN ('half-time','passed','fail')),
    code VARCHAR(200),
    code_time TIMESTAMP,
    expire_after INTEGER DEFAULT 24,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES odc_students (id) ON DELETE CASCADE ,
    FOREIGN KEY (course_id) REFERENCES odc_courses (id) ON DELETE CASCADE 
);
INSERT INTO odc_enroll (student_id, course_id) VALUES (1,(SELECT id FROM odc_courses LIMIT 1)),(2,(SELECT id FROM odc_courses LIMIT 1)),(3,(SELECT id FROM odc_courses LIMIT 1))
,(4,(SELECT id FROM odc_courses LIMIT 1))
,(5,(SELECT id FROM odc_courses LIMIT 1))
,(6,(SELECT id FROM odc_courses LIMIT 1))
,(7,(SELECT id FROM odc_courses LIMIT 1));
-- INSERT INTO odc_enroll (student_id, course_id) VALUES ((SELECT id FROM odc_students LIMIT 1),(SELECT id FROM odc_courses LIMIT 1)),
-- ((SELECT id FROM odc_students WHERE id!=(SELECT id from odc_enroll ORDER BY random() LIMIT 1) ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1));
-- ((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
-- ((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
-- ((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
-- ((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
-- ((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
-- ((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1)),
-- ((SELECT id FROM odc_students ORDER BY random() LIMIT 1),(SELECT id FROM odc_courses ORDER BY random() LIMIT 1));