import { useSignal } from "@preact/signals";
import { Header } from "../components/Header.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-3 bg-sky-950 border border-sky-900 p-1">
        <div>
          hi, my nickname is ataractic, i am a 23 years old french guy. interested
          in low-level programming, hacking, reverse-engineering and computer
          science as a whole since childhood, i work on multiple projects
          related to these fields in favor of a career following this
          interesting journey.
        </div>
      </div>
    </div>
  );
}
