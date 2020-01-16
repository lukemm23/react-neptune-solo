
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
    "firstname" VARCHAR (80) NOT NULL,
    "lastname" VARCHAR (80) NOT NULL,
    "email" VARCHAR (80) NOT NULL,
    "phone"  VARCHAR(10) NOT NULL,
    "address" VARCHAR (200) NOT NULL,
    "city" VARCHAR (20) NOT NULL,
    "zipcode" VARCHAR(5) NOT NULL,
    "notes" VARCHAR (500)
);

INSERT INTO "customers" ("firstname", "lastname", "email", "phone", "address", "city", "zipcode", "notes")
VALUES 
('luke', 'ma', 'lukemm23@gmail.com', '9728783836', '11230 oak street', 'kansas city', '64114', 'awesome dude!');

-- GET by id
SELECT * FROM "customers"
WHERE "customers"."id" = 1;

-- ORDERS TABLE
CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "estimate_time" numeric,
  "service" VARCHAR (30),
  "service_frequency" VARCHAR (20),
  "service_due" numeric(12,2),
  "tax_due" numeric(12,2),
  "total_due" numeric(12,2),
  "status" VARCHAR (30)
);

INSERT INTO "orders" ("estimate_time", "service", "service_frequency", "service_due", "tax_due", "total_due", "status")
VALUES ('2', 'maintenance', 'monthly', '50.00', '4.25', '54.25', 'not dispatched'),
		('4', 'repair', 'once', '150.00', '12.75', '162.75', 'dispatched');

-- INSERT EMPTY ORDERS
    INSERT INTO "orders" ("estimate_time")
VALUES (0);

-- JUNCTION TABLE
CREATE TABLE "order_detail_junction" (
  "id" SERIAL PRIMARY KEY,
  "employee_id" int REFERENCES "employees",
  "order_id" int REFERENCES "orders",
  "service_id" int REFERENCES "services",
  "customer_id" int REFERENCES "customers"
);

INSERT INTO "order_detail_junction" ("employee_id", "order_id", "service_id", "customer_id")
VALUES ('1', '1', '1','1' );

-- EMPLOYEES TABLE
CREATE TABLE "employees" (
  "id" SERIAL PRIMARY KEY,
  "firstname" varchar,
  "lastname" varchar,
  "position" varchar,
);

INSERT INTO "employees" ("firstname", "lastname", "position")
VALUES ('luke', 'ma', 'technician'),
		('ginny', 'wang', 'admin');

-- SERVICES TABLE
  CREATE TABLE "services" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "type" varchar,
  "unit_sale_price" varchar
);

INSERT INTO "services" ("name", "type", "unit_sale_price")
VALUES ('premium cleaning', 'maint', '49.99'),
		('pump repair', 'repair', '149.99');