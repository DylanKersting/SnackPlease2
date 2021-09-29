-- CreateTable
CREATE TABLE "recipes" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "markdown" TEXT NOT NULL,
    "created" TIMETZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
