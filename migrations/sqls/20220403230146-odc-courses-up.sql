CREATE TABLE odc_courses (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(200) NOT NULL,
    course_level VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT Now(),
    category_id INTEGER NOT NULL,
    FOREIGN KEY (category_id)
      REFERENCES odc_categories (id) ON DELETE CASCADE
);

INSERT INTO odc_courses ( course_name, course_level,category_id) VALUES ('CS10','first', (SELECT id FROM odc_categories LIMIT 1))
,('CS20','last', (SELECT id FROM odc_categories ORDER BY random() LIMIT 1))
,('CS30','first', (SELECT id FROM odc_categories ORDER BY random() LIMIT 1))
,('CS40','mid', (SELECT id FROM odc_categories ORDER BY random() LIMIT 1))
,('CS50','mid', (SELECT id FROM odc_categories ORDER BY random() LIMIT 1))
,('CS60','first', (SELECT id FROM odc_categories ORDER BY random() LIMIT 1))