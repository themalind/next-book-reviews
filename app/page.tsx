import { db } from "@/prisma/db";
import Link from "next/link";

/** Kan användas för att bestämma hur ofta sidan ska byggas om. */
export const revalidate = 3600; // 1h

/** Kan användas för att exempelvis tvinga SSR. */
// export const dynamic = "force-dynamic";

export default async function Home() {
  const books = await db.book.findMany({
    include: { _count: true },
  });

  return (
    <main className="p-2">
      <h1 className="text-3xl">Next Prod Book Club</h1>
      <section className="grid gap-4">
        {books.map((book) => (
          <article key={book.id} className="border-b border-zinc-300 py-2">
            <h2 className="text-xl">{book.title}</h2>
            <p className="text-sm text-zinc-500">Author: {book.author}</p>
            <p className="text-sm text-zinc-500">
              Comments: {book._count.comments}
            </p>
            <p className="text-zinc-800">{book.summary.substring(0, 100)}...</p>
            <section className="my-2">
              <Link
                href={`/book/${book.slug}`}
                className="text-lg text-sky-800"
              >
                Read more
              </Link>
            </section>
          </article>
        ))}
      </section>
    </main>
  );
}
