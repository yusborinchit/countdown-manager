import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { type FormEvent } from "react";

function LogIn() {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { currentTarget: form } = event;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return;

    const supaData = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (supaData.error) return;

    router.push("/");
  };

  return (
    <main className="grid h-screen place-items-center">
      <form
        onSubmit={handleLogIn}
        className="flex flex-col w-full max-w-[300px] gap-4 mx-auto"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="block text-xs font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-sm rounded border-zinc-300"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="block text-xs font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="text-sm rounded border-zinc-300"
          />
        </div>

        <button
          type="submit"
          className="grid px-8 py-2 mt-8 font-bold text-white uppercase rounded bg-gradient-to-t from-indigo-700 to-indigo-500 place-items-center"
        >
          Log in
        </button>
      </form>
    </main>
  );
}

export default LogIn;
