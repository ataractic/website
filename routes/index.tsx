export default function Home() {
  return (
    <div class="max-w-screen-md mx-auto flex gap-2">
      <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] border border-[#99CCFF] px-4 py-1 rounded-md min-w-fit">
        <ul>
          <li>
          <a class="flex items-center gap-1" href="mailto:ataractic@pm.me"><img src="/ico/letter_small.png"/>E-mail</a>
          </li>
          <li>
            <a class="flex items-center gap-1" href="https://bandcamp.com/ataractic"><img src="/ico/music_disk_small.png"/>Playlist</a>
          </li>
          <li>
            <a class="flex items-center gap-1" href="https://github.com/ataractic"><img src="/ico/mystify_small.png"/>Github</a>
          </li>
        </ul>
      </div>
      <div class="bg-white border border-[#99CCFF] rounded-md">
        <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] flex rounded-t-md">
          <div class="bg-gradient-to-b from-[#99CCFF] to-[#FFFFFF] px-4 py-1 border-r border-[#99CCFF] rounded-t-md">
            Home
          </div>
          <a href="/music" class="px-4 py-1 rounded-t-md">
            Music
          </a>
          <a href="/projects" class="px-4 py-1 rounded-t-md">
            Projects
          </a>
        </div>
        <div class="px-4 py-1">
          Hi, my nickname is ataractic, I am a 23 years old french guy.
          Interested in low-level programming, hacking, reverse-engineering and
          computer science as a whole since childhood, I work on multiple
          projects related to these fields in favor of a career following this
          interesting journey.
        </div>
      </div>
    </div>
  );
}
