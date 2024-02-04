import { type PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ataractic.net/" />
        <meta property="og:title" content="ataractic.net" />
        <meta property="og:description" content="hi, my nickname is ataractic, i am a 23 years old french guy. interested in low-level programming, hacking, reverse-engineering and computer science as a whole since childhood, i work on multiple projects related to these fields in favor of a career following this interesting journey." />
        {/* <meta property="og:image" content="/logo_full.png" /> */}
        <title>ataractic.net</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-sky-200 text-white font-mono text-xs mx-auto">
        <div class="bg-[url('/bg.jpg')] h-screen bg-cover bg-center bg-no-repeat">
          <div class="border-x border-[#393E59] bg-opacity-80 bg-[#222625] mx-auto max-w-screen-md p-3 min-h-screen flex flex-col justify-between">
            <div>
            <Header />
            <Component />
            </div>
            <div>
            <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
