import Image from "next/image";
import {BarChart3, Flame, GitBranch, Sparkles} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {portfolioData} from "@/data/portfolio";
import {isConfiguredText} from "@/lib/site";

const widgetCards = [
  {
    label: "Contributions Graph",
    icon: GitBranch,
    key: "contributions"
  },
  {
    label: "GitHub Stats",
    icon: Sparkles,
    key: "stats"
  },
  {
    label: "Top Languages",
    icon: BarChart3,
    key: "languages"
  },
  {
    label: "Streak Stats",
    icon: Flame,
    key: "streak"
  }
] as const;

export function GithubShowcase() {
  const username = portfolioData.contact.githubUsername.trim();
  const hasUsername = isConfiguredText(username);

  if (!hasUsername) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {widgetCards.map(item => {
          const Icon = item.icon;

          return (
            <Card key={item.key} className="h-full">
              <CardHeader className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>
                  Live GitHub widgets will appear here once a public GitHub
                  username is added to the portfolio data file.
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    );
  }

  const contributionGraph = `https://ghchart.rshah.org/0ea5e9/${username}`;
  const githubStats = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&theme=transparent&bg_color=00000000&title_color=38bdf8&text_color=94a3b8&icon_color=38bdf8&rank_icon=github`;
  const topLanguages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=transparent&bg_color=00000000&title_color=38bdf8&text_color=94a3b8`;
  const streakStats = `https://streak-stats.demolab.com?user=${username}&hide_border=true&background=00000000&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8&sideLabels=94a3b8&dates=94a3b8&currStreakNum=ffffff&sideNums=ffffff`;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card className="overflow-hidden md:col-span-2">
        <CardHeader>
          <CardTitle>Contributions Graph</CardTitle>
          <CardDescription>
            A quick view into consistency and public coding activity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={contributionGraph}
            alt={`${username} contributions graph`}
            width={1400}
            height={320}
            unoptimized
            className="w-full rounded-2xl"
          />
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>GitHub Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={githubStats}
            alt={`${username} GitHub stats`}
            width={900}
            height={360}
            unoptimized
            className="w-full rounded-2xl"
          />
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Top Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={topLanguages}
            alt={`${username} top programming languages`}
            width={900}
            height={360}
            unoptimized
            className="w-full rounded-2xl"
          />
        </CardContent>
      </Card>

      <Card className="overflow-hidden md:col-span-2">
        <CardHeader>
          <CardTitle>Streak Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={streakStats}
            alt={`${username} GitHub streak statistics`}
            width={1400}
            height={320}
            unoptimized
            className="w-full rounded-2xl"
          />
        </CardContent>
      </Card>
    </div>
  );
}
