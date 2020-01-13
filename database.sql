
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

INSERT INTO "user" ("username", "password")
VALUES 
('lukemm23', '12345');

CREATE TABLE "customers" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "lastname" VARCHAR (80) UNIQUE NOT NULL,
    "email" VARCHAR (80) NOT NULL,
    "phone"  numeric(10) UNIQUE NOT NULL,
    "address" VARCHAR (200) NOT NULL,
    "city" VARCHAR (20) NOT NULL,
    "zipcode" integer NOT NULL,
    "notes" VARCHAR (500)
);

INSERT INTO "customers" ("firstname", "lastname", "email", "phone", "address", "city", "zipcode", "notes")
VALUES 
('luke', 'ma', 'lukemm23@gmail.com', '9728783836', '11230 oak street', 'kansas city', '64114', 'awesome dude!');

