 CREATE DATABASE express_mvp;

 CREATE TABLE Leads (
    id SERIAL PRIMARY KEY,
    createdAt TIMESTAMPTZ,
    UpdatedAt TIMESTAMPTZ,
    email TEXT
);

/*
You need to create a .env file and define the database connection as follows
    DB_HOST='localhost'
    DB_USER=postgres
    DB_DATABASE=express_mvp
    DB_PASSWORD=null
    DB_PORT=5432

*/