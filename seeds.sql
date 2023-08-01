INSERT INTO departments (dept_name)
VALUES ('Service'),
       ('Research'),
       ('Marketing'),
       ('Finances'),
       ('IT Support');

INSERT INTO roles (job_title, dept_id, salary)
VALUES ('Service Manager', 1, 100000),
       ('Research Manager', 2, 100500),
       ('Marketing Manager', 3, 101000),
       ('Chief Financial Officer', 4, 250000),
       ('IT Support Agent', 5, 50000);

INSERT INTO employees (first_name, last_name, job_title, dept_id, salary, reporting_manager)
VALUES ('Peyton', 'Manning', 'Service Manager' 1, 100000, 'Archie Manning'),
       ('John', 'Elway', 'Research Manager' 2, 100500, 'Steve Young'),
       ('Chipper', 'Jones', 'Marketing Manager', 3, 101000, 'Bobby Cox'),
       ('Michael', 'Jordan', 'Chief Financial Officer', 4, 250000, 'Larry Bird'),
       ('Java', 'Script', 'IT Support Agent', 5, 50000, 'HTML');
       
