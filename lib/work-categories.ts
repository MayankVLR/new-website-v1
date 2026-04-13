export const WORK_SLUGS = ["ugc", "motion", "reels", "ai"] as const

export type WorkSlug = (typeof WORK_SLUGS)[number]

export function isWorkSlug(value: string): value is WorkSlug {
  return (WORK_SLUGS as readonly string[]).includes(value)
}

export type WorkEmbed = { src: string; label: string }

export type WorkCategoryPageData = {
  title: string
  description: string
  embeds: readonly WorkEmbed[]
}

export const workCategoryContent: Record<WorkSlug, WorkCategoryPageData> = {
  ugc: {
    title: "UGC videos",
    description:
      "Real, authentic content — edited to feel professional and natural, with a focus on engagement and conversions.",
    embeds: [
      {
        src: "https://drive.google.com/file/d/18q3fNbmgVPnVOimHpRV8XmZ4pCT4brP4/preview",
        label: "UGC video 1",
      },
      {
        src: "https://drive.google.com/file/d/17dCFxH2PLwbopN5FEmlCqCgIDPkZvH01/preview",
        label: "UGC video 2",
      },
      {
        src: "https://drive.google.com/file/d/1LaqV4RQE1EJS3cqRRH7LkSlZQDe6JFJx/preview",
        label: "UGC video 3",
      },
    ],
  },
  motion: {
    title: "Motion graphics / graphic ads",
    description:
      "Animated ads, brand visuals, and high-impact motion built in After Effects.",
    embeds: [
      {
        src: "https://drive.google.com/file/d/1HKbTUHfpdSCSLT8QnP5Hq-W-2CVtwgcf/preview",
        label: "Motion 1",
      },
      {
        src: "https://drive.google.com/file/d/1aOp22EdYSkgX3-nvUl3hEZbdqSP94Alm/preview",
        label: "Motion 2",
      },
      {
        src: "https://drive.google.com/file/d/14tPblU7F34KtTsQCorx6WRXURz7bKW1f/preview",
        label: "Motion 3",
      },
      {
        src: "https://drive.google.com/file/d/15zbB08wp1zz3UJjVfzccHLau54BV2GfX/preview",
        label: "Motion 4",
      },
    ],
  },
  reels: {
    title: "Reels",
    description:
      "Fast-paced edits and trend-based content for Instagram, TikTok, and Shorts — add Drive links when you’re ready.",
    embeds: [],
  },
  ai: {
    title: "AI-assisted content",
    description:
      "AI-assisted visuals and experiments — add pieces here as you publish them.",
    embeds: [],
  },
}

export function workPath(slug: WorkSlug): string {
  return `/work/${slug}`
}
