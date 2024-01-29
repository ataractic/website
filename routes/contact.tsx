import { Header } from "../components/Header.tsx";

interface EntryProps {
  title: string;
  object: string;
}

function Entry(props: EntryProps) {
  return (
    <div class="border border-sky-900 bg-sky-950 p-1">
      <h1 class="font-bold">{props.title}</h1>
      <h2 class="">{props.object}</h2>
    </div>
  );
}

export default function Links() {
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto gap-3">
        <div class="flex flex-col gap-3">
          <Entry title="email" object="ataractic@pm.me" />
          <Entry title="github" object="ataractic" />
          <Entry title="discord" object="ataractic" />
        </div>
      </div>
    </div>
  );
}
