CREATE TABLE odc_admins (
    id SERIAL PRIMARY KEY,
    role VARCHAR(200) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    create_at TIMESTAMP DEFAULT Now()
);

INSERT INTO odc_admins(username,
email,
password,image, role) VALUES('admin','admin@admin.com','$2b$10$8ENtjf6XrnE6BaZukqdn\uWAk7f.\x12kf8lIkU\ejk27fiyjzI6','asdjasjdsa.asdasdjasjd','admin');