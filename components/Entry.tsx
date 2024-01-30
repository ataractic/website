interface EntryProps {
    title: string;
    object: string;
  }

export function Entry(props: EntryProps) {
  return (
    <div class="border border-sky-900 bg-sky-950 p-1">
      <h1 class="font-bold">{props.title}</h1>
      <h2 class="">{props.object}</h2>
    </div>
  );
}
