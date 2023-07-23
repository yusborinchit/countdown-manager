import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main className={`${inter.className} h-screen grid place-items-center`}>
      <h1 className="text-4xl font-bold">Hello World!</h1>
    </main>
  );
}

export default Home;
