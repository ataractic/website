import { useSignal } from "@preact/signals";
import { Header } from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

interface ProjectsPageData {
  projects: object[];
}

interface EntryProps {
  title: string;
  object: string;
  language: string;
  topics: string[];
  private: boolean;
  url: string;
}

function Entry(props: EntryProps) {
  return (
    <div class="px-4 py-1">
      <h1 class="font-bold">
        <a
          href={props.url}
        >
          {props.title}
        </a>
      </h1>
      <h2>
        {props.object ?? "none"}
      </h2>
      <div class="flex flex-col">
        <h2 class="font-bold">Language</h2>
        <div>{props.language ?? "none"}</div>
      </div>
    </div>
  );
}

export const handler: Handlers<ProjectsPageData, ProjectsPageData> = {
  async GET(_req, ctx) {
    const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN");

    const res1 = await fetch("https://api.github.com/users/ataractic/repos", {
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const p1 = await res1.json();

    const res2 = await fetch("https://api.github.com/orgs/n1rip/repos", {
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const p2 = await res2.json();

    const projects = p1.concat(p2);

    return ctx.render({ projects });
  },
};

export default function projects(props: PageProps<ProjectsPageData>) {
  return (
    <div class="max-w-screen-md mx-auto flex gap-2">
      <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] border border-[#99CCFF] px-4 py-1 rounded-md min-w-fit">
        <ul>
          <li>
            <a class="flex items-center gap-1" href="mailto:ataractic@pm.me">
              <img src="/ico/letter_small.png" />E-mail
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-1"
              href="https://bandcamp.com/ataractic"
            >
              <img src="/ico/music_disk_small.png" />Playlist
            </a>
          </li>
          <li>
            <a
              class="flex items-center gap-1"
              href="https://github.com/ataractic"
            >
              <img src="/ico/mystify_small.png" />Github
            </a>
          </li>
        </ul>
      </div>
      <div class="bg-white border border-[#99CCFF] rounded-md grow">
        <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] flex rounded-t-md">
          <a href="/" class="px-4 py-1 rounded-t-md">
            Home
          </a>
          <a href="/music" class="px-4 py-1 rounded-t-md">
            Music
          </a>
          <div class="bg-gradient-to-b from-[#99CCFF] to-[#FFFFFF] px-4 py-1 border-x border-[#99CCFF] rounded-t-md">
            Projects
          </div>
        </div>
        <div class="divide-y divide-[#99CCFF]">
          {props.data.projects.map((elem) => (
            <Entry
              title={
                // @ts-ignore: large response
                elem.full_name
              }
              object={
                // @ts-ignore: large response
                elem.description
              }
              language={
                // @ts-ignore: large response
                elem.language
              }
              topics={
                // @ts-ignore: large response
                elem.topics
              }
              private={
                // @ts-ignore: large response
                elem.private
              }
              url={
                // @ts-ignore: large response
                elem.html_url
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
