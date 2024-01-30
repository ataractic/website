import { Header } from "../components/Header.tsx";

export default function Music() {
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto gap-3 flex flex-col">
        <div class="flex flex-col gap-3 border border-sky-900 bg-sky-950 p-1">
          <div>
            <h1 class="font-bold">Hyperwav</h1>
            <h2>
              dreamy electronic lo-fi sounds inspired by retro-futuristic and
              sci-fi aesthetics. hywerwav was created in 2019
            </h2>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">links</h2>
              <a
                href="https://soundcloud.com/hyperwavmusic"
                class="text-blue-400 underline"
              >
                Soundcloud
              </a>
              <a
                href="https://hyperwavmusic.bandcamp.com/"
                class="text-blue-400 underline"
              >
                Bandcamp
              </a>
              <a
                href="https://open.spotify.com/intl-fr/artist/0geHGCdO2rBJVvnhQDON9V?si=RSt13Pm_QICvPuPu3va-LQ"
                class="text-blue-400 underline"
              >
                Spotify
              </a>
              <a
                href="https://music.youtube.com/channel/UCr1TACblgK6JvEDE_zJtHZw"
                class="text-blue-400 underline"
              >
                YT Music
              </a>
              <a
                href="https://music.apple.com/us/artist/hyperwav/1510269111"
                class="text-blue-400 underline"
              >
                Apple Music
              </a>
              <a
                href="https://deezer.page.link/2s3LwVD9UDmeDcS98"
                class="text-blue-400 underline"
              >
                Deezer
              </a>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">tracklist</h2>

            <a
              href="https://soundcloud.com/hyperwavmusic/kilimanjaro"
              class="text-blue-400 underline"
            >
              kilimanjaro
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/departure"
              class="text-blue-400 underline"
            >
              departure
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/swim"
              class="text-blue-400 underline"
            >
              swim
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/pictures"
              class="text-blue-400 underline"
            >
              pictures
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/soulless"
              class="text-blue-400 underline"
            >
              soulless
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/digital-dancer"
              class="text-blue-400 underline"
            >
              digital-dancer
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/quantum-drive"
              class="text-blue-400 underline"
            >
              quantum-drive
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-3 border border-sky-900 bg-sky-950 p-1">
          <div>
            <h1 class="font-bold">ataractic</h1>
            <h2>
              dreamy underground electronic lo-fi sounds inspired by night and modern
              aesthetics. project started in october 2023.
            </h2>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">links</h2>

            <div class="grid grid-cols-3 ">
              <a
                href="https://soundcloud.com/ataracticmusic"
                class="text-blue-400 underline"
              >
                Soundcloud
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">tracklist</h2>

            <a
              href="https://soundcloud.com/ataracticmusic/1146pm"
              class="text-blue-400 underline"
            >
              1146pm
            </a>
          </div>
        </div>
        <div class="flex flex-col gap-3 border border-sky-900 bg-sky-950 p-1">
          <div>
            <h1 class="font-bold">myst</h1>
            <h2>
              luxurious, evasive dreamy and shimmering sounds inspired from 80s vhs commercials, 80s way of life and aesthetics.
            </h2>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">links</h2>

            <div class="grid grid-cols-3 ">
              <a
                href="https://soundcloud.com/mystescape"
                class="text-blue-400 underline"
              >
                Soundcloud
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">tracklist</h2>

            <a
              href="https://soundcloud.com/mystescape/presence"
              class="text-blue-400 underline"
            >
              presence
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
