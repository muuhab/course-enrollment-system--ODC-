CREATE TABLE odc_courses (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(200) NOT NULL,
    course_level VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT Now(),
    category_id INTEGER NOT NULL,
    FOREIGN KEY (category_id)
      REFERENCES odc_categories (id)
);