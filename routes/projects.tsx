import { Handlers, PageProps } from "$fresh/server.ts";
import { Repo } from "../types/GithubTypes.ts";

interface PageData {
  repos: Repo[] | undefined;
}

function Entry({ repo }: { repo: Repo }) {
  return (
    <div class="px-2 py-1 flex justify-between gap-2">
      <div>
        <h1 class="font-bold">
          <a href={repo.html_url}>
            {repo.full_name}
          </a>
        </h1>
        <h2>
          {repo.description ?? "none"}
        </h2>
        <div class="flex flex-col items-start">
          <h2 class="font-bold">Language</h2>
          {repo.language
            ? (
              <div class="bg-gradient-to-t from-[#33CC00] dark:from-[#336600] to-[#FFFFFF] dark:to-[#333333] border border-[#33CC00] dark:border-[#336600] rounded-md px-2 py-1 text-[#336600] dark:text-[#33CC00]">
                {repo.language}
              </div>
            )
            : null}
        </div>
      </div>
      <div>
        {repo.archived
          ? (
            <div class="bg-gradient-to-t from-[#FFCC00] dark:from-[#660000] to-[#FFFFFF] dark:to-[#333333] border border-[#FFCC00] dark:border-[#660000] rounded-md px-2 py-1 text-[#FF6600] dark:text-[#FF6600]">
              public archive
            </div>
          )
          : null}
      </div>
    </div>
  );
}

export const handler: Handlers<PageData, PageData> = {
  GET(_req, ctx) {
    const url_list: string[] = [
      "https://api.github.com/users/ataractic/repos",
      "https://api.github.com/orgs/n1rip/repos",
    ];
    const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN");
    const repos: Repo[] = [];

    url_list.forEach(async (url) => {
      const res: Response = await fetch(url, {
        headers: {
          "Authorization": `Bearer ${GITHUB_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (res.ok) {
        repos.push(await JSON.parse(await res.json()));
      }
    });

    return ctx.render({ repos });
  },
};

export default function projects(props: PageProps<PageData>) {
  return (
    <div class="bg-[#FFFFFF] dark:bg-[#333333] border border-[#99CCFF] dark:border-[#000000] rounded-md grow">
      <div class="bg-gradient-to-t from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] flex rounded-t-md">
        <a href="/" class="px-2 py-1 rounded-t-md">
          Home
        </a>
        <a href="/music" class="px-2 py-1 rounded-t-md">
          Music
        </a>
        <div class="bg-gradient-to-b from-[#99CCFF] dark:from-[#000000] to-[#FFFFFF] dark:to-[#333333] px-2 py-1 border-x border-[#99CCFF] dark:border-[#000000] rounded-t-md">
          Projects
        </div>
      </div>
      <div class="divide-y divide-[#99CCFF] dark:divide-[#000000]">
        {props.data.repos
          ? props.data.repos.map((repo) => <Entry repo={repo} />)
          : null
        }
      </div>
    </div>
  );
}
