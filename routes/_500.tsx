import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col gap-3">
        <div>
        <h1 class="font-bold">500</h1>
        <a
          class="text-white hover:bg-white hover:text-black"
          href="https://google.com"
        >
          better come back later
        </a>
        </div>
      </div>
    </>
  );
}
