CREATE TABLE odc_admins (
    id SERIAL PRIMARY KEY,
    role VARCHAR(200) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    create_at TIMESTAMP DEFAULT Now()
);