import handler from "./api";

export default async function Home() {
  const data = await handler();
  return (
    <main>
      <h1>{data}</h1>
    </main>
  );
}
