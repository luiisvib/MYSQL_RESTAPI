DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES
    (1, 'Peter', 1000),
    (2, 'Susan', 1200),
    (3, 'Mike', 2500),
    (4, 'Jhoni', 1800),
    (5, 'Liza', 2400);