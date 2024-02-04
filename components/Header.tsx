import { Logo } from "../islands/Logo.tsx";

export function Header() {
  return (
    <div class="flex flex-col justify-center max-w-screen-md mx-auto mb-3">
      <div class="flex gap-3 p-1 text-white justify-between border border-[#393E59] bg-[#222625]">
        <Logo />
        <div class="flex gap-3">
          <a class="text-[#ECF2BD] underline" href="/">
            home
          </a>
          <a class="text-[#ECF2BD] underline" href="/music">
            music
          </a>
          <a class="text-[#ECF2BD] underline" href="/contact">
            contact
          </a>
          <a class="text-[#ECF2BD] underline" href="/projects">
            projects
          </a>
        </div>
      </div>
    </div>
  );
}
