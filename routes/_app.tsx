import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ataractic.net</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-sky-200 text-white font-mono text-xs m-3">
        <Component />
      </body>
    </html>
  );
}
