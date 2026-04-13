import {
  editorialContainerClass,
  editorialSurfaceStyle,
} from "@/lib/editorial-surface"

const ACCENT = "#e24a32"

const stats = [
  { label: "Projects completed", value: "20+" },
  { label: "Total views", value: "1M+" },
  { label: "Experience", value: "1+ year" },
  { label: "Companies", value: "2" },
] as const

type Role = {
  period: string
  type: string
  title: string
  company: string
  location: string
  detail: string
}

const roles: Role[] = [
  {
    period: "Mar 2026",
    type: "Internship",
    title: "Motion Designer",
    company: "Zepto",
    location: "Bangalore (on-site)",
    detail: "Motion designer.",
  },
  {
    period: "Aug 2025 – Nov 2025",
    type: "Full-time",
    title: "Production team member",
    company: "Vected Technologies Pvt. Ltd.",
    location: "Indore",
    detail: "Production support and video-editing.",
  },
  {
    period: "Nov 2024 – Mar 2025",
    type: "Freelance",
    title: "Video Editor",
    company: "Boba Bhai",
    location: "Remote",
    detail: "Editing social content and brand videos.",
  },
]

const skills = [
  "Motion design",
  "Video editing",
  "Storytelling through visuals",
  "Social media content creation",
] as const

const tools: { label: string; abbr: string; bg: string; fg?: string }[] = [
  { label: "After Effects", abbr: "Ae", bg: "#d291ff", fg: "#1a1a1a" },
  { label: "Premiere Pro", abbr: "Pr", bg: "#9999ff", fg: "#1a1a1a" },
  { label: "Photoshop", abbr: "Ps", bg: "#31a8ff", fg: "#fff" },
  { label: "Illustrator", abbr: "Ai", bg: "#ff9a00", fg: "#1a1a1a" },
]

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M17 8C17 8 13 4 7 6C7 6 5 14 12 20C12 20 18 12 17 8Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 20C12 20 8 12 17 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-x-clip py-14 text-pretty text-neutral-900 sm:py-20 md:py-24"
      style={editorialSurfaceStyle}
    >
      <div className={`relative z-10 ${editorialContainerClass}`}>
        {/* Intro */}
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-2 sm:mb-6 sm:justify-start sm:gap-3">
              <span
                className="inline-block rotate-[-3deg] border border-black/45 bg-transparent px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 shadow-sm backdrop-blur-[2px]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                India
              </span>
              <span
                className="inline-block translate-y-1 rotate-[4deg] border border-black/45 bg-transparent px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 shadow-sm backdrop-blur-[2px]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                Open for work
              </span>
            </div>

            <h2
              className="font-sans text-[clamp(1.85rem,6vw+0.5rem,3.25rem)] font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
            >
              Hi, I&apos;m <span style={{ color: ACCENT }}>Mayank</span>
            </h2>
            <p className="mt-3 font-sans text-base font-medium text-neutral-800 sm:text-lg">
              Motion designer &amp; video editor
            </p>
            <p className="mt-1 font-sans text-sm text-neutral-600 sm:text-[15px]">
              Based in India · cinematic edits for brands &amp; creators
            </p>
          </div>
        </div>

        {/* Three columns */}
        <div className="grid gap-10 border-t border-black/10 pt-10 sm:gap-12 sm:pt-12 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-black/10 lg:pt-14">
          {/* About */}
          <div className="space-y-5 text-center font-sans text-sm leading-relaxed text-neutral-800 sm:text-[15px] lg:pr-8 lg:text-left xl:pr-10">
            <p>
              I&apos;m a motion designer and video editor who turns raw footage
              into{" "}
              <strong className="font-semibold text-neutral-950">
                smooth, emotional, professional
              </strong>{" "}
              videos social pieces, brand ads, motion graphics, and fast reels.
            </p>
            <p>
              My style is{" "}
              <strong className="font-semibold text-neutral-950">
                clean cuts, strong storytelling, and obsessive detail
              </strong>
              . I&apos;ve shipped 20+ projects, earned 1M+ views, and worked with
              teams like Zepto alongside independent creators.
            </p>
            <p className="text-[15px] text-neutral-700">
              I&apos;m Mayank, based in India. I create cinematic content for
              brands and creators ads, reels, and social video with edits that
              feel natural and engaging.
            </p>
          </div>

          {/* Experience */}
          <div className="text-center font-sans lg:px-8 lg:text-left xl:px-10">
            <h3 className="mb-6 text-base font-bold text-neutral-900">
              Experience
            </h3>
            <ul className="space-y-9">
              {roles.map((job) => (
                <li key={job.company + job.period}>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide text-neutral-500"
                  >
                    <span style={{ color: ACCENT }}>{job.period}</span>
                    <span className="mx-2 text-neutral-400">·</span>
                    {job.type}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-neutral-950">
                    {job.title}
                  </p>
                  <p className="text-sm text-neutral-700">
                    {job.company} · {job.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {job.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats + skills + tools */}
          <div className="space-y-10 text-center font-sans lg:pl-8 lg:text-left xl:pl-10">
            <div>
              <h3 className="mb-4 text-base font-bold text-neutral-900">
                At a glance
              </h3>
              <dl className="mx-auto grid max-w-xs gap-3 text-sm sm:max-w-none lg:mx-0">
                {stats.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-black/10 pb-2 last:border-0 sm:justify-start sm:gap-8"
                  >
                    <dt className="text-neutral-600">{row.label}</dt>
                    <dd className="font-semibold tabular-nums text-neutral-950">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="mb-4 text-base font-bold text-neutral-900">
                Skills
              </h3>
              <ul className="mx-auto flex max-w-md flex-col gap-2.5 sm:max-w-none lg:mx-0">
                {skills.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-center gap-2.5 text-sm sm:justify-start"
                  >
                    <LeafIcon className="shrink-0 text-[#3d6b4a]" />
                    <span className="text-neutral-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-base font-bold text-neutral-900">
                Tools
              </h3>
              <div className="mx-auto grid max-w-[240px] grid-cols-4 gap-2 sm:max-w-[280px] sm:gap-3 lg:mx-0">
                {tools.map((t) => (
                  <div
                    key={t.label}
                    title={t.label}
                    className="flex aspect-square items-center justify-center rounded-md text-[10px] font-bold shadow-md ring-1 ring-black/5 sm:rounded-lg sm:text-xs"
                    style={{
                      backgroundColor: t.bg,
                      color: t.fg ?? "#111",
                    }}
                  >
                    {t.abbr}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-12 border-t border-black/10 pt-12 sm:mt-16 sm:pt-14 lg:mt-20">
          <blockquote
            className="mx-auto max-w-3xl text-center font-serif text-xl font-medium italic leading-snug text-neutral-900 sm:text-2xl"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            &ldquo;The best edit is invisible you feel the emotion, not the
            cut.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
