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
  archived: boolean;
}

function Entry(props: EntryProps) {
  return (
    <div class="px-2 py-1 flex justify-between gap-2">
      <div>
        <h1 class="font-bold">
          <a href={props.url}>
            {props.title}
          </a>
        </h1>
        <h2>
          {props.object ?? "none"}
        </h2>
        <div class="flex flex-col items-start">
          <h2 class="font-bold">Language</h2>
          {props.language
            ? (
              <div class="bg-gradient-to-t from-[#33CC00] to-[#FFFFFF] border border-[#33CC00] rounded-md px-2 py-1 text-[#339900]">
                {props.language}
              </div>
            )
            : null}
        </div>
      </div>
      <div>
        {props.archived
          ? (
            <div class="bg-gradient-to-t from-[#FFFF99] to-[#FFFFFF] border border-[#FFFF99] rounded-md px-2 py-1 text-[#FFCC99]">
              public archive
            </div>
          )
          : null}
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
    <div class="bg-white border border-[#99CCFF] rounded-md grow">
      <div class="bg-gradient-to-t from-[#99CCFF] to-[#FFFFFF] flex rounded-t-md">
        <a href="/" class="px-2 py-1 rounded-t-md">
          Home
        </a>
        <a href="/music" class="px-2 py-1 rounded-t-md">
          Music
        </a>
        <div class="bg-gradient-to-b from-[#99CCFF] to-[#FFFFFF] px-2 py-1 border-x border-[#99CCFF] rounded-t-md">
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
            archived={
              // @ts-ignore: large response
              elem.archived
            }
          />
        ))}
      </div>
    </div>
  );
}
