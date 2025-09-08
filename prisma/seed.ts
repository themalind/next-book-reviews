import { db } from "./db";

async function main() {
  await db.book.deleteMany();
  await db.book.create({
    data: {
      title: "Hobbit",
      author: "Tolkien",
      publishDate: new Date("1990-10-08"),
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente unde tempore sit! Itaque quaerat natus cupiditate minima dolorum recusandae nisi nulla cumque! Expedita consequuntur dicta doloremque, omnis nostrum doloribus.",
    },
  });

  await db.book.create({
    data: {
      title: "Harry Potter",
      author: "JK Rowling",
      publishDate: new Date("1994-03-08"),
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente unde tempore sit! Itaque quaerat natus cupiditate minima dolorum recusandae nisi nulla cumque! Expedita consequuntur dicta doloremque, omnis nostrum doloribus.",
    },
  });
}

main()
  .then(() => console.log("Seeded Successfully"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
