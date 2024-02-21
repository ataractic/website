export function Footer() {
  return (
    <div class="flex flex-col justify-center mx-auto mt-2">
      <div class="bg-gradient-to-t from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] border border-[#99CCFF] dark:border-[#000000] flex rounded-md justify-between px-2 py-1 mb-2">
        <div><b>v2</b> - copyright (c) 2024 - ataractic</div>
        <div>
        <a href="https://github.com/ataractic/website">
          source
        </a>
        <span> - </span>
        <a href="https://fresh.deno.dev/">
          made with fresh
        </a>
        </div>
      </div>
    </div>
  );
}