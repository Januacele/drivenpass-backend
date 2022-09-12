-- CreateTable
CREATE TABLE "creditCards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "cardHolderName" TEXT NOT NULL,
    "securityCode" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVitual" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "creditCards_id_key" ON "creditCards"("id");

-- CreateIndex
CREATE UNIQUE INDEX "creditCards_title_userId_key" ON "creditCards"("title", "userId");

-- AddForeignKey
ALTER TABLE "creditCards" ADD CONSTRAINT "creditCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
