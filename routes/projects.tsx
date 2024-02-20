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
              <div class="bg-gradient-to-t from-[#33CC00] dark:from-[#336600] to-[#FFFFFF] dark:to-[#333333] border border-[#33CC00] dark:border-[#336600] rounded-md px-2 py-1 text-[#336600] dark:text-[#33CC00]">
                {props.language}
              </div>
            )
            : null}
        </div>
      </div>
      <div>
        {props.archived
          ? (
            <div class="bg-gradient-to-t from-[#FFCC00] dark:from-[#006666] to-[#FFFFFF] dark:to-[#333333] border border-[#FFCC00] dark:border-[#006666] rounded-md px-2 py-1 text-[#FF6600] dark:text-[#00CC66]">
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
    <div class="bg-[#FFFFFF] dark:bg-[#333333] border border-[#99CCFF] dark:border-[#000000] rounded-md grow">
      <div class="bg-gradient-to-t from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] flex rounded-t-md">
        <a href="/" class="px-2 py-1 rounded-t-md">
          Home
        </a>
        <a href="/music" class="px-2 py-1 rounded-t-md">
          Music
        </a>
        <div class="bg-gradient-to-b from-[#99CCFF] dark:from-[#000000] to-[#000000] dark: px-2 py-1 border-x border-[#99CCFF] dark:border-[#000000] rounded-t-md">
          Projects
        </div>
      </div>
      <div class="divide-y divide-[#99CCFF] dark:divide-[#000000]">
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
