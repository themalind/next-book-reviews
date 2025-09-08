import { db } from "@/prisma/db";
import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  return db.book.findMany({ select: { slug: true } });
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title } = await parent;
  const { slug } = await props.params;
  const book = await db.book.findUnique({ where: { slug } });

  return {
    title: title!.absolute + " | " + book!.title,
    description: book!.summary.substring(0, 100),
  };
}

export default async function BookPage(props: Props) {
  const { slug } = await props.params;
  const book = await db.book.findUnique({
    where: { slug },
    include: { comments: true },
  });

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
        {book.comments.length === 0 ? (
          <p>There are no comments for this book yet...</p>
        ) : (
          book.comments.map((c) => (
            <article key={c.id}>
              <p>{c.content}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
