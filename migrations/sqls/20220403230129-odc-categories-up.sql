CREATE TABLE odc_categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT Now()
);

INSERT INTO odc_categories (category_name) VALUES ('Programming'),('Data Science'),('IT');