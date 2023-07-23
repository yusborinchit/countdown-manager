import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { type GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  return (
    <main className="grid h-screen place-items-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Hello World!</h1>
        <button
          type="button"
          onClick={async () => {
            const supaData = await supabaseClient.auth.signOut();
            if (!supaData.error) router.reload();
          }}
          className="grid px-8 py-2 font-bold text-white uppercase rounded bg-gradient-to-t from-indigo-700 to-indigo-500 place-items-center"
        >
          Log out
        </button>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabaseClient = createPagesServerClient(context);

  const { data } = await supabaseClient.auth.getSession();
  const { session } = data;

  if (!session)
    return { redirect: { destination: "/account/log-in/", permanent: false } };

  return { props: { session } };
}

export default Home;
