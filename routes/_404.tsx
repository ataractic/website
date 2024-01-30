import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col gap-3">
        <div class="bg-sky-950 border border-sky-900 p-1">
        <h1 class="font-bold">404</h1>
        <a
          class="text-blue-400 underline"
          href="/"
        >
          better go home
        </a>
        </div>
      </div>
    </>
  );
}
