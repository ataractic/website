import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col gap-3">
        <div class="bg-[#222625] border border-[#393E59] p-1">
        <h1 class="font-bold">500</h1>
        <a
          class="text-[#ECF2BD] underline"
          href="https://google.com"
        >
          better come back later
        </a>
        </div>
      </div>
    </>
  );
}
