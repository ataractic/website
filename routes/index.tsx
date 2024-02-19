export default function Home() {
  return (
    <div class="max-w-screen-md mx-auto flex gap-2">
      <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] border border-[#99CCFF] px-2 py-1 rounded-md min-w-fit">
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
          <div class="bg-gradient-to-b from-[#99CCFF] to-[#FFFFFF] px-2 py-1 border-r border-[#99CCFF] rounded-t-md">
            Home
          </div>
          <a href="/music" class="px-2 py-1 rounded-t-md">
            Music
          </a>
          <a href="/projects" class="px-2 py-1 rounded-t-md">
            Projects
          </a>
        </div>
        <div class="px-2 py-1">
          <h1 class="font-bold">About Me</h1>
          I go by the nickname Ataractic, and I'm a 23-year-old French
          enthusiast. My passion lies in low-level programming, hacking,
          reverse-engineering, and the vast realm of computer science — a
          fascination that has accompanied me since childhood. Currently, I'm
          deeply engrossed in several projects related to these fields, all in
          pursuit of a rewarding career on this captivating journey.
          <h1 class="font-bold">My Musical Endeavors</h1>
          As a hobby, I create music under various monikers, including
          Hyperwav, Ataractic, and ｅｓｃａｐｅ逃げる. Each of these aliases
          explores a distinct vibe and artistic style.
        </div>
        <div class="flex gap-2 px-2 py-1">
          <div class="bg-gradient-to-t from-[#33CC00] to-[#FFFFFF] border border-[#33CC00] rounded-md px-2 py-1 text-[#339900]">test</div>
        </div>
      </div>
    </div>
  );
}
