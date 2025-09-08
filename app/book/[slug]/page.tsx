interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BookPage(props: Props) {
  console.log(props);
  return (
    <main>
      <p>details...</p>
    </main>
  );
}
