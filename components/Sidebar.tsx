export function Sidebar() {
  return (
    <div class="min-w-fit flex flex-col gap-2">
      <div class="bg-[#FFFFFF] dark:bg-[#333333] border border-[#99CCFF] dark:border-[#000000] rounded-md">
      <div class="bg-gradient-to-t from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] flex rounded-t-md px-2 py-1">
          Contact me
        </div>
        <ul class="px-2 py-1">
          <li>
            <a
              class="flex items-center gap-1"
              href="mailto:ataractic@pm.me"
            >
              <img src="/ico/letter_small.png" />E-mail
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-1"
              href="https://discordapp.com/users/216909665257259008"
            >
              <img src="/ico/chat_small.png" />Discord
            </a>
          </li>
        </ul>
      </div>
      <div class="bg-[#FFFFFF] dark:bg-[#333333] border border-[#99CCFF] dark:border-[#000000] rounded-md grow">
        <div class="bg-gradient-to-t from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] flex rounded-t-md px-2 py-1">
          My stuff
        </div>
        <ul class="px-2 py-1">
          <li>
            <a
              class="flex items-center gap-1"
              href="https://n1.rip/"
            >
              <img src="/ico/night_on_computer_small.png" />n1.rip
            </a>
          </li>
          <li class="flex items-center gap-1">
            <a
              class="flex items-center gap-1"
              href="https://bandcamp.com/ataractic"
            >
              <img src="/ico/music_disk_small.png" />Playlist
            </a>
            <span class="text-[#FF0000] italic">Hot!</span>
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
    </div>
  );
}
