
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- USERS TABLE
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "security_level" numeric(3) NOT NULL
);

INSERT INTO "user" ("username", "password", "security_level")
VALUES 
('lukemm23', '12345', '3');

-- CUSTOMERS TABLE
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

-- ORDERS TABLE
CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "estimate_time" numeric NOT NULL,
  "service" VARCHAR (30) NOT NULL,
  "service_frequency" VARCHAR (20) NOT NULL,
  "service_due" numeric(12,2) NOT NULL,
  "tax_due" numeric(12,2),
  "total_due" numeric(12,2),
  "status" VARCHAR (30) NOT NULL
);

INSERT INTO "orders" ("estimate_time", "service", "service_frequency", "service_due", "tax_due", "total_due", "status")
VALUES ('2', 'maintenance', 'monthly', '50.00', '4.25', '54.25', 'not dispatched'),
		('4', 'repair', 'once', '150.00', '12.75', '162.75', 'dispatched');

-- JUNCTION TABLE
CREATE TABLE "order_detail_junction" (
  "id" SERIAL PRIMARY KEY,
  "employee_id" int,
  "order_id" int,
  "service_id" int,
  "customer_id" int
);

-- EMPLOYEES TABLE
CREATE TABLE "employees" (
  "id" SERIAL PRIMARY KEY,
  "firstname" varchar,
  "lastname" varchar,
  "position" varchar,
);