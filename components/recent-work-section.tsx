import Link from "next/link"
import { editorialContainerClass, editorialSurfaceStyle } from "@/lib/editorial-surface"
import { workPath, type WorkSlug } from "@/lib/work-categories"

const projects: {
  index: string
  title: string
  description: string
  pill: string
  slug: WorkSlug
}[] = [
  {
    index: "01",
    title: "UGC Videos",
    description:
      "Real, authentic UGC — edited to look polished while staying natural and conversion-friendly.",
    pill: "UGC",
    slug: "ugc",
  },
  {
    index: "02",
    title: "Motion Graphics",
    description:
      "Animated ads, brand visuals, and motion graphics built in After Effects.",
    pill: "MOTION",
    slug: "motion",
  },
  {
    index: "03",
    title: "Reels",
    description:
      "Fast-paced edits and trend-based content for Instagram, TikTok, and Shorts.",
    pill: "REELS",
    slug: "reels",
  },
  {
    index: "04",
    title: "AI-assisted content",
    description:
      "AI-assisted visuals and experiments alongside traditional edit workflows.",
    pill: "AI",
    slug: "ai",
  },
]

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 13L13 5M13 5H6M13 5V12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RecentWorkSection() {
  return (
    <section
      id="recent-work"
      className="relative min-h-screen w-full overflow-hidden text-black"
      style={editorialSurfaceStyle}
    >
      <div
        className={`relative z-10 py-14 sm:py-20 md:py-28 ${editorialContainerClass}`}
      >
        <header className="border-b border-black pb-8 sm:pb-10 md:pb-12">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.38em] text-black sm:text-[11px]">
            Selected projects
          </p>

          <div className="mt-7 flex flex-col justify-between gap-8 sm:mt-9 md:flex-row md:items-end md:gap-6">
            <h1
              className="max-w-[min(100%,22rem)] font-serif text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-black md:max-w-none"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              <span className="block">Recent</span>
              <span className="block font-semibold italic">Work</span>
            </h1>

            <p className="shrink-0 font-sans text-[11px] leading-snug tracking-[0.14em] text-black md:max-w-[12rem] md:text-right md:text-[10px] md:leading-relaxed">
              4 primary categories{" "}
              <span className="inline-block translate-y-px" aria-hidden>
                ↓
              </span>
            </p>
          </div>
        </header>

        <ul className="mt-0">
          {projects.map((project) => (
            <li
              key={project.index}
              className="border-b border-black last:border-b-0"
            >
              <Link
                href={workPath(project.slug)}
                className="group grid grid-cols-1 gap-5 py-7 transition-[background-color] duration-200 hover:bg-black/[0.02] sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-x-10 sm:gap-y-0 sm:py-10 md:grid-cols-[3.25rem_1fr_auto] md:gap-x-12 md:py-11"
              >
                <span
                  className="font-serif text-base italic text-black sm:text-lg sm:leading-none"
                  style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
                >
                  {project.index}
                </span>

                <div className="min-w-0 sm:col-span-1 sm:pl-0 md:max-w-[36rem]">
                  <h2
                    className="font-serif text-[1.35rem] font-bold leading-tight text-black sm:text-2xl md:text-[1.6rem]"
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p className="mt-2.5 font-sans text-[13px] leading-relaxed text-black/75 sm:text-sm md:mt-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-start gap-5 sm:justify-end sm:gap-4">
                  <span className="rounded-full border border-black bg-transparent px-3.5 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-black sm:px-4 sm:py-2 sm:text-[11px]">
                    {project.pill}
                  </span>
                  <span className="text-black transition-transform duration-200 ease-out group-hover:-translate-y-px group-hover:translate-x-px">
                    <ArrowUpRight className="h-[1.1rem] w-[1.1rem] sm:h-[1.15rem] sm:w-[1.15rem]" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
