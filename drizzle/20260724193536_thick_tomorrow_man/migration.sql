CREATE TABLE "players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE
);
