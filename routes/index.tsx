export default function Home() {
  return (
    <div class="bg-[#FFFFFF] dark:bg-[#333333] border border-[#99CCFF] dark:border-[#000000] rounded-md grow">
      <div class="bg-gradient-to-t from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] flex rounded-t-md">
        <div class="bg-gradient-to-b from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] px-2 py-1 border-r border-[#99CCFF] dark:border-[#000000] rounded-t-md">
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
        I go by the nickname Ataractic, and I'm a 23-year-old French enthusiast.
        My passion lies in low-level programming, hacking, reverse-engineering,
        and the vast realm of computer science — a fascination that has
        accompanied me since childhood. Currently, I'm deeply engrossed in
        several projects related to these fields, all in pursuit of a rewarding
        career on this captivating journey.
        <h1 class="font-bold">My Musical Endeavors</h1>
        As a hobby, I create music under various monikers, including Hyperwav,
        Ataractic, and ｅｓｃａｐｅ逃げる. Each of these aliases explores a
        distinct vibe and artistic style.
      </div>
      <div class="flex gap-2 px-2 py-1">
        <div class="bg-gradient-to-t from-[#33CC00] dark:from-[#336600] to-[#FFFFFF] dark:to-[#333333] border border-[#33CC00] dark:border-[#336600] rounded-md px-2 py-1 text-[#336600] dark:text-[#33CC00]">
          v2.1
        </div>
      </div>
    </div>
  );
}
