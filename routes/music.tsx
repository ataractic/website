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
                class="hover:bg-white hover:text-black"
              >
                Soundcloud
              </a>
              <a
                href="https://hyperwavmusic.bandcamp.com/"
                class="hover:bg-white hover:text-black"
              >
                Bandcamp
              </a>
              <a
                href="https://open.spotify.com/intl-fr/artist/0geHGCdO2rBJVvnhQDON9V?si=RSt13Pm_QICvPuPu3va-LQ"
                class="hover:bg-white hover:text-black"
              >
                Spotify
              </a>
              <a
                href="https://music.youtube.com/channel/UCr1TACblgK6JvEDE_zJtHZw"
                class="hover:bg-white hover:text-black"
              >
                YT Music
              </a>
              <a
                href="https://music.apple.com/us/artist/hyperwav/1510269111"
                class="hover:bg-white hover:text-black"
              >
                Apple Music
              </a>
              <a
                href="https://deezer.page.link/2s3LwVD9UDmeDcS98"
                class="hover:bg-white hover:text-black"
              >
                Deezer
              </a>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">tracklist</h2>

            <a
              href="https://soundcloud.com/hyperwavmusic/kilimanjaro"
              class="hover:bg-white hover:text-black"
            >
              kilimanjaro
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/departure"
              class="hover:bg-white hover:text-black"
            >
              departure
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/swim"
              class="hover:bg-white hover:text-black"
            >
              swim
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/pictures"
              class="hover:bg-white hover:text-black"
            >
              pictures
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/soulless"
              class="hover:bg-white hover:text-black"
            >
              soulless
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/digital-dancer"
              class="hover:bg-white hover:text-black"
            >
              digital-dancer
            </a>
            <a
              href="https://soundcloud.com/hyperwavmusic/quantum-drive"
              class="hover:bg-white hover:text-black"
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
                href="https://soundcloud.com/cn96"
                class="hover:bg-white hover:text-black"
              >
                Soundcloud
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <h2 class="font-bold">tracklist</h2>

            <a
              href="https://soundcloud.com/cn96/1146pm"
              class="hover:bg-white hover:text-black"
            >
              1146pm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
