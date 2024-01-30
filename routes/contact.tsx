import { Header } from "../components/Header.tsx";
import { Entry } from "../components/Entry.tsx";

export default function Links() {
  return (
    <div class="max-w-screen-md mx-auto gap-3">
      <div class="flex flex-col gap-3">
        <Entry title="email" object="ataractic@pm.me" />
        <Entry title="github" object="ataractic" />
        <Entry title="discord" object="ataractic" />
      </div>
    </div>
  );
}
