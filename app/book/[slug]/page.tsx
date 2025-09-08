import { db } from "@/prisma/db";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BookPage(props: Props) {
  const { slug } = await props.params;
  const book = await db.book.findUnique({ where: { slug } });

  if (!book) {
    return (
      <main>
        <p>The book you are looking for does not exist...</p>
      </main>
    );
  }

  return (
    <main className="p-2 grid gap-4 mb-12">
      <article key={book.id}>
        <h1 className="text-3xl">{book.title}</h1>
        <p className="text-sm text-zinc-500">Author: {book.author}</p>
        <p className="text-zinc-800 my-2">{book.summary}</p>
        <p className="text-sm text-zinc-500">
          Publish Date: {book.publishDate.toLocaleDateString()}
        </p>
      </article>
      <section>
        <h2 className="text-xl">Comments</h2>
        <p>There are no comments for this book yet...</p>
      </section>
    </main>
  );
}
