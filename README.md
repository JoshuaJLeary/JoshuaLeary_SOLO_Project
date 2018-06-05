# Golf 2Gether

Managing a busy work and personal life often leaves little time to golf. Golf 2Gether is a web application that allows golfers to create events for other golfers to join, and join events other golfers have created. 

# Getting Started

Required:
- Node.js
- Postico and PostgreSQL
- Nodemon

To Run:
- npm install
- npm run server
- npm run client

SQL:

...
CREATE TABLE "person" (
	"id" serial PRIMARY KEY,
	"username" varchar(80) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"name" varchar(80) NOT NULL,
	"city" varchar(80) NOT NULL,
	"skill" varchar(80) NOT NULL,
	"bio" varchar(200) NOT NULL,
	"alcohol" BOOLEAN NOT NULL DEFAULT 'false',
	"tobacco" BOOLEAN NOT NULL DEFAULT 'false'
);

CREATE TABLE "event" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_name" varchar(100) NOT NULL,
	"course_name" varchar(100) NOT NULL,
	"course_address" varchar(100) NOT NULL,
	"course_phone" VARCHAR(80) NOT NULL,
	"event_date" DATE NOT NULL default CURRENT_DATE,
	"tee_time" VARCHAR(80) NOT NULL
);

CREATE TABLE "attendee" (
	"id" serial PRIMARY KEY NOT NULL,
	"person_id" INT REFERENCES "person",
	"event_id" INT REFERENCES "event",
	CONSTRAINT uc_tab UNIQUE (person_id, event_id),
);
...

### Next Steps:
- Add more styling to the application, specifically creating a reactive layout
- Incorporate Nodemailer to send email messages to allow golfers to communicate
- Communicate with local golf courses to post their upcoming tournaments through Golf 2Gether

### Created by Joshua J Leary



