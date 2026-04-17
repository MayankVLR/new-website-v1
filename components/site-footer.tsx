import Link from "next/link"
import {
  editorialContainerClass,
  editorialSurfaceStyle,
} from "@/lib/editorial-surface"

/** Replace with your real links when ready */
const contact: {
  label: string
  value: string
  href?: string
}[] = [
  { label: "Location", value: "India" },
  { label: "Availability", value: "Open for work" },
  {
    label: "Email",
    value: "videoeditingmayank@gmail.com",
    href: "mailto:videoeditingmayank@gmail.com",
  },
]

const portfolioLinks = [
  {
    label: "Recent work",
    href: "/#recent-work",
    value: "On this site",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    value: "soon",
  },
]

function InfoRows({
  rows,
}: {
  rows: readonly { label: string; value: string; href?: string }[]
}) {
  return (
    <dl className="space-y-3.5">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-0.5 text-sm sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-x-6 sm:gap-y-1 sm:text-[15px]"
        >
          <dt className="shrink-0 font-semibold text-neutral-900">
            {row.label}
          </dt>
          <dd className="min-w-0">
            {row.href ? (
              <Link
                href={row.href}
                className="text-neutral-800 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline"
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  row.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {row.value}
              </Link>
            ) : (
              <span className="text-neutral-800">{row.value}</span>
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function SiteFooter() {
  return (
    <footer
      className="border-t border-black/10"
      style={editorialSurfaceStyle}
    >
      <div className={`py-16 sm:py-20 md:py-24 ${editorialContainerClass}`}>
        <div className="grid gap-12 text-center sm:gap-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:text-left xl:gap-20">
          <div className="lg:pr-6 xl:pr-10">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl md:text-[3.25rem] md:leading-tight">
              Thank you!
            </h2>
            <p className="mt-3 font-sans text-base italic text-neutral-600 sm:text-lg">
              Let&apos;s talk about your next video or motion piece.
            </p>
          </div>

          <div className="space-y-11 font-sans lg:border-l lg:border-black/10 lg:pl-10 xl:pl-12">
            <div>
              <h3 className="mb-5 text-base font-bold text-neutral-950">
                Contact
              </h3>
              <InfoRows rows={contact} />
            </div>

            <div>
              <h3 className="mb-5 max-w-md text-base font-bold leading-snug text-neutral-950">
                Portfolio &amp; social
              </h3>
              <InfoRows rows={portfolioLinks} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
