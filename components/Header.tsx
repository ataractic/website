import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Logo } from "../islands/Logo.tsx";

export function Header() {
  return (
    <div class="flex flex-col justify-center max-w-screen-md mx-auto mb-3">
      <div class="flex gap-3 p-1 text-white justify-center border border-sky-900 bg-sky-950">
        <Logo />
        <a class="hover:text-black hover:bg-white" href="/music">
          music
        </a>
        <a class="hover:text-black hover:bg-white" href="/contact">
          contact
        </a>
        <a class="hover:text-black hover:bg-white" href="/projects">
          projects
        </a>
      </div>
    </div>
  );
}
