INSERT INTO departments (dept_name)
VALUES ('Service'),
       ('Research'),
       ('Marketing'),
       ('Finances'),
       ('IT Support');

INSERT INTO roles (job_title, dept_name, salary)
VALUES ('Service Manager', 'Service', 100000),
       ('Research Manager', 'Research', 100500),
       ('Marketing Manager', 'Marketing', 101000),
       ('Chief Financial Officer', 'Finances', 250000),
       ('IT Support Agent', 'IT', 50000);

INSERT INTO employees (first_name, last_name, job_title, dept_name, salary, reporting_manager)
VALUES ('Peyton', 'Manning', 'Service Manager', 'Service', 100000, 'Archie Manning'),
       ('John', 'Elway', 'Research Manager', 'Research', 100500, 'Steve Young'),
       ('Chipper', 'Jones', 'Marketing Manager', 'Marketing', 101000, 'Bobby Cox'),
       ('Michael', 'Jordan', 'Chief Financial Officer', 'Finances', 250000, 'Larry Bird'),
       ('Java', 'Script', 'IT Support Agent', 'IT', 50000, 'HTML');

