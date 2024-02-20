import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Oops!</title>
      </Head>
      <div class="bg-[#FFFFFF] dark:bg-[#333333] border border-[#99CCFF] dark:border-[#000000] rounded-md grow">
        <div class="bg-gradient-to-t from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] flex rounded-t-md">
          <a href="/" class="px-2 py-1 rounded-t-md">
            Home
          </a>
          <a href="/music" class="px-2 py-1 rounded-t-md">
            Music
          </a>
          <a href="/projects" class="px-2 py-1 rounded-t-md">
            Projects
          </a>
          <div
            href="/projects"
            class="italic text-[#FF0000] bg-gradient-to-b from-[#FFFF99] to-[#FFFFFF] dark:to-[#333333] border-x border-[#FFFF99] px-2 py-1 rounded-t-md"
          >
            404
          </div>
        </div>
        <div class="px-2 py-1 divide-y divide-[#99CCFF] dark:divide-[#000000]">
          <div>
            <div class="font-bold text-5xl">404</div>
            Congratulations! You discovered a hidden page but... there's nothing
            to see here. The page may have been removed, or there's an error in
            the URL.
          </div>
          <div class="flex gap-2 pt-1 mt-1">
            <a href="mailto:ataractic@pm.me">Report a broken link</a>
            <a href="/">Return home</a>
          </div>
        </div>
      </div>
    </>
  );
}
