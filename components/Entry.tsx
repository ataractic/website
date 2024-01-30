interface EntryProps {
    title: string;
    object: string;
  }

export function Entry(props: EntryProps) {
  return (
    <div class="border border-[#393E59] bg-[#222625] p-1">
      <h1 class="font-bold">{props.title}</h1>
      <h2 class="">{props.object}</h2>
    </div>
  );
}