import { Logo } from "../islands/Logo.tsx";

export function Header() {
  return (
    <div class="flex flex-col justify-center max-w-screen-md mx-auto mb-3">
      <div class="flex gap-3 p-1 text-white justify-center border border-sky-900 bg-sky-950">
        <Logo />
        <a class="text-blue-400 underline" href="/">
          home
        </a>
        <a class="text-blue-400 underline" href="/music">
          music
        </a>
        <a class="text-blue-400 underline" href="/contact">
          contact
        </a>
        <a class="text-blue-400 underline" href="/projects">
          projects
        </a>
      </div>
    </div>
  );
}
