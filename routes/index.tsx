import { useSignal } from "@preact/signals";
import { Header } from "../components/Header.tsx";
import { Entry } from "../components/Entry.tsx";

export default function Home() {
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col gap-3">
        <div class="bg-sky-950 border border-sky-900 p-1">
          hi, my nickname is ataractic, i am a 23 years old french guy.
          interested in low-level programming, hacking, reverse-engineering and
          computer science as a whole since childhood, i work on multiple
          projects related to these fields in favor of a career following this
          interesting journey.
        </div>
        <Entry title="email" object="ataractic@pm.me" />
        <Entry title="github" object="ataractic" />
        <Entry title="discord" object="ataractic" />
      </div>
    </div>
  );
}
