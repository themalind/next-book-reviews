import { db } from "./db";

async function main() {
  //...
}

main()
  .then(() => console.log("Seeded Successfully"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
