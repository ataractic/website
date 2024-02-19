import { Head } from "$fresh/runtime.ts";

export default function Error500() {
  return (
    <>
      <Head>
        <title>Oops!</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex gap-2">
        <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] border border-[#99CCFF] px-4 py-1 rounded-md min-w-fit">
          <ul>
            <li>
              <a class="flex items-center gap-1" href="mailto:ataractic@pm.me">
                <img src="/ico/letter_small.png" />E-mail
              </a>
            </li>
            <li>
              <a
                class="flex items-center gap-1"
                href="https://bandcamp.com/ataractic"
              >
                <img src="/ico/music_disk_small.png" />Playlist
              </a>
            </li>
            <li>
              <a
                class="flex items-center gap-1"
                href="https://github.com/ataractic"
              >
                <img src="/ico/mystify_small.png" />Github
              </a>
            </li>
          </ul>
        </div>
        <div class="bg-white border border-[#99CCFF] rounded-md">
          <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] flex rounded-t-md">
            <a href="/" class="px-4 py-1 rounded-t-md">
              Home
            </a>
            <a href="/music" class="px-4 py-1 rounded-t-md">
              Music
            </a>
            <a href="/projects" class="px-4 py-1 rounded-t-md">
              Projects
            </a>
            <div href="/projects" class="italic text-[#FF0000] bg-gradient-to-b from-[#FFFF99] to-[#FFFFFF] border-x border-[#FFFF99] px-4 py-1 rounded-t-md">
              500
            </div>
          </div>
          <div class="px-4 py-1 divide-y divide-[#99CCFF]">
            <div>
              <div class="font-bold text-5xl">404</div>
              Oops, there is a problem on our end. Please click the "Report an error" link below to notify the administrator.
            </div>
            <div class="flex gap-2 pt-1 mt-1">
              <a href="mailto:ataractic@pm.me">Report an error</a>
              <a href="/">Return home</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
