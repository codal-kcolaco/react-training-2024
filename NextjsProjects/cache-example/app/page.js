import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";

async function ProductQuantity() {
  noStore(); // doesnt store in cache
  let res = await fetch("https://api.vercel.app/products/1");
  let data = await res.json();

  return <h1>{data.stock}</h1>;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>App router</h1>
      <ProductQuantity />
    </main>
  );
}
