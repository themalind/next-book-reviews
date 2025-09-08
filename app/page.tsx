import { db } from "@/prisma/db";

export default async function Home() {
  const books = await db.book.findMany();

  return (
    <main className="p-2">
      <h1 className="text-2xl">Next Prod Book Club</h1>
      <section className="grid gap-4">
        {books.map((book) => (
          <article key={book.id} className="border-b border-zinc-300 py-2">
            <h2 className="text-lg">{book.title}</h2>
            <p className="text-sm text-zinc-500">Author: {book.author}</p>
            <p className="text-sm text-zinc-500">
              Publish Date: {book.publishDate.toLocaleDateString()}
            </p>
            <p className="text-zinc-800">{book.summary.substring(0, 100)}...</p>
          </article>
        ))}
      </section>
    </main>
  );
}
