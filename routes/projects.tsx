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
    <div class="flex flex-col gap-3">
      <div>
        <h1 class="font-bold">
          {props.title}{" "}
          <span class="font-normal">
            {props.private ? "(private)" : (
              <a
                href={props.url}
                class="hover:bg-white hover:text-black"
              >
                browse repository
              </a>
            )}
          </span>
        </h1>
        <h2>{props.object ?? "none"}</h2>
      </div>
      <div>
        <h1 class="font-bold">language</h1>
        <h2>{props.language ?? "none"}</h2>
      </div>
      <div>
        <h1 class="font-bold">topics</h1>
        <div class="grid grid-cols-3">
          {props.topics.length > 0
            ? props.topics.map((elem) => (
              <a
                href={`https://github.com/topics/${elem}`}
                class="hover:bg-white hover:text-black"
              >
                {elem}
              </a>
            ))
            : "none"}
        </div>
      </div>
      <hr />
    </div>
  );
}

export const handler: Handlers<ProjectsPageData, ProjectsPageData> = {
  async GET(_req, ctx) {
    const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN");

    const res1 = await fetch("https://api.github.com/users/eretsym/repos", {
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
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-3">
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
