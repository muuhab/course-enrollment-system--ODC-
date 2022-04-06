CREATE TABLE odc_trainers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(44) NOT NULL,
    created_at TIMESTAMP DEFAULT Now()
);

INSERT INTO odc_trainers (name) VALUES('trainer1');