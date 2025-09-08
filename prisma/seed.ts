import { db } from "./db";

async function main() {
  await db.comment.deleteMany();
  await db.book.deleteMany();

  await db.book.create({
    data: {
      title: "The Hobbit",
      slug: "the-hobbit",
      author: "Tolkien",
      publishDate: new Date("1990-10-08"),
      summary: `The Hobbit by J.R.R. Tolkien is a fantasy novel that follows the adventure of Bilbo Baggins, a comfort-loving hobbit from the Shire. Bilbo is recruited by the wizard Gandalf to join a group of thirteen dwarves, led by Thorin Oakenshield, on a quest to reclaim the dwarves' mountain home and treasure from the dragon Smaug.
The story begins with Bilbo reluctantly leaving his home in Bag End. The group encounters numerous challenges, including trolls, goblins, stone giants, and a mysterious creature named Gollum. In a pivotal moment, Bilbo finds a mysterious ring (later revealed to be the One Ring) during a riddle game with Gollum. Using his wit and the ring’s power of invisibility, Bilbo escapes and continues the journey.
The company faces further perils, including capture by wood-elves and confrontations with giant spiders in Mirkwood. Bilbo’s courage grows as he rescues the dwarves multiple times. Eventually, they reach the Lonely Mountain, where Bilbo confronts Smaug. His cleverness provokes the dragon, leading to Smaug’s attack on the nearby town of Lake-town, where he is killed by a human archer, Bard.
The treasure attracts various factions—humans, elves, and dwarves—who nearly go to war in the Battle of the Five Armies. However, goblins and wargs attack, forcing the groups to unite. Thorin dies in the battle, and peace is restored. Bilbo returns home with a share of the treasure and the ring, forever changed by his adventure.
The novel explores themes of bravery, greed, and personal growth, setting the stage for The Lord of the Rings.`,
      comments: {
        create: [
          {
            content: "This is a very nice book!",
            author: "Mysan",
            publishDate: new Date("2024-10-10"),
          },
          {
            content: "I didn't like it...",
            author: "David",
            publishDate: new Date("2025-05-10"),
          },
        ],
      },
    },
  });

  await db.book.create({
    data: {
      title: "Harry Potter and the Philosopher’s Stone",
      slug: "harry-potter-and-the-philosophers-stone",
      author: "JK Rowling",
      publishDate: new Date("1994-03-08"),
      summary: `Harry Potter and the Philosopher’s Stone (1997), the first book in J.K. Rowling’s series, introduces Harry Potter, an orphaned boy living with his cruel aunt, uncle, and cousin, the Dursleys, in England. On his 11th birthday, Harry learns he’s a wizard when Rubeus Hagrid, a half-giant, reveals that Harry’s parents, James and Lily, were killed by the dark wizard Voldemort. Voldemort also tried to kill baby Harry but failed, leaving him with a lightning-shaped scar and reducing Voldemort to a weakened state.
Harry is whisked away to Hogwarts School of Witchcraft and Wizardry, where he begins his magical education. He befriends Ron Weasley, a kind-hearted boy from a large wizarding family, and Hermione Granger, a brilliant Muggle-born witch. He also encounters rivals like Draco Malfoy and teachers like the stern Professor McGonagall, the quirky Professor Quirrell, and the suspicious Professor Snape.
As Harry adapts to Hogwarts, he discovers his talent for flying on a broomstick and joins the Gryffindor Quidditch team. Meanwhile, he, Ron, and Hermione uncover a mystery involving a hidden object, the Philosopher’s Stone, which grants eternal life. The stone is guarded by a three-headed dog and protected by enchantments. Suspecting Snape’s involvement, the trio investigates, learning the stone is sought by Voldemort, who’s possessing Quirrell.
Using their wits, courage, and skills—Hermione’s logic, Ron’s chess prowess, and Harry’s bravery—they navigate a series of magical challenges to reach the stone. Harry confronts Quirrell/Voldemort, who can’t touch him due to the protective magic of his mother’s love. Harry retrieves the stone, defeats Quirrell, and prevents Voldemort’s return.
Harry ends his first year as a hero, forging lifelong friendships and discovering his place in the wizarding world, setting the stage for his ongoing battle against Voldemort. The story explores themes of friendship, courage, and destiny.`,
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
