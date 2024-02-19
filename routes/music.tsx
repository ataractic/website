import { Header } from "../components/Header.tsx";

export default function Music() {
  return (
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
          <div class="bg-gradient-to-b from-[#99CCFF] to-[#FFFFFF] px-4 py-1 border-x border-[#99CCFF] rounded-t-md">
            Music
          </div>
          <a href="/projects" class="px-4 py-1 rounded-t-md">
            Projects
          </a>
        </div>
        <div class="divide-y divide-[#99CCFF]">
          <div class="px-4 py-1">
            <h1 class="font-bold">Hyperwav</h1>
            <h2>
              Dreamy electronic lo-fi sounds inspired by retro-futuristic and
              sci-fi aesthetics. Hyperwav was created in 2019.
            </h2>
            <div class="flex flex-col">
              <h2 class="font-bold">Links</h2>
              <a href="https://soundcloud.com/hyperwavmusic">
                Soundcloud
              </a>
              <a href="https://hyperwavmusic.bandcamp.com/">
                Bandcamp
              </a>
              <a href="https://open.spotify.com/intl-fr/artist/0geHGCdO2rBJVvnhQDON9V?si=RSt13Pm_QICvPuPu3va-LQ">
                Spotify
              </a>
              <a href="https://music.youtube.com/channel/UCr1TACblgK6JvEDE_zJtHZw">
                YT Music
              </a>
              <a href="https://music.apple.com/us/artist/hyperwav/1510269111">
                Apple Music
              </a>
              <a href="https://deezer.page.link/2s3LwVD9UDmeDcS98">
                Deezer
              </a>
            </div>
            <div class="flex flex-col">
              <h2 class="font-bold">Tracklist</h2>
              <a href="https://soundcloud.com/hyperwavmusic/kilimanjaro">
                Kilimanjaro
              </a>
              <a href="https://soundcloud.com/hyperwavmusic/departure">
                Departure
              </a>
              <a href="https://soundcloud.com/hyperwavmusic/swim">
                Swim
              </a>
              <a href="https://soundcloud.com/hyperwavmusic/pictures">
                Pictures
              </a>
              <a href="https://soundcloud.com/hyperwavmusic/soulless">
                Soulless
              </a>
              <a href="https://soundcloud.com/hyperwavmusic/digital-dancer">
                Digital-dancer
              </a>
              <a href="https://soundcloud.com/hyperwavmusic/quantum-drive">
                Quantum-drive
              </a>
            </div>
          </div>
          <div class="px-4 py-1">
            <h1 class="font-bold">Ataractic</h1>
            <h2>
              Dreamy underground electronic lo-fi sounds inspired by night and
              modern aesthetics. Project started in october 2023.
            </h2>
            <div class="flex flex-col">
              <h2 class="font-bold">Links</h2>
              <a href="https://soundcloud.com/ataracticmusic">
                Soundcloud
              </a>
            </div>
            <div class="flex flex-col">
              <h2 class="font-bold">Tracklist</h2>
              <a href="https://soundcloud.com/ataracticmusic/1146pm">
                1146pm
              </a>
            </div>
          </div>
          <div class="px-4 py-1">
            <h1 class="font-bold">ｅｓｃａｐｅ逃げる</h1>
            <h2>
              Luxurious, evasive dreamy and shimmering sounds inspired from 80s
              vhs commercials, 80s way of life and aesthetics.
            </h2>
            <div class="flex flex-col">
              <h2 class="font-bold">Links</h2>
              <a href="https://soundcloud.com/mystescape">
                Soundcloud
              </a>
            </div>
            <div class="flex flex-col">
              <h2 class="font-bold">Tracklist</h2>
              <a href="https://soundcloud.com/mystescape/shimmering">
                Shimmering
              </a>
              <a href="https://soundcloud.com/mystescape/presence">
                Presence
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
