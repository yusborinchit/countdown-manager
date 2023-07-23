import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { type GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main className={`${inter.className} h-screen grid place-items-center`}>
      <h1 className="text-4xl font-bold">Hello World!</h1>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabaseClient = createPagesServerClient(context);

  const { data } = await supabaseClient.auth.getSession();
  const { session } = data;

  if (!session) return { redirect: { destination: "/", permanent: false } };

  return { props: { session } };
}

export default Home;
