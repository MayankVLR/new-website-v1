import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { WorkShowcase } from "@/components/work-showcase"
import {
  editorialContainerClass,
  editorialSurfaceStyle,
} from "@/lib/editorial-surface"
import {
  isWorkSlug,
  workCategoryContent,
  WORK_SLUGS,
  type WorkSlug,
} from "@/lib/work-categories"

export function generateStaticParams() {
  return WORK_SLUGS.map((category) => ({ category }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  if (!isWorkSlug(category)) {
    return { title: "Work" }
  }
  const { title, description } = workCategoryContent[category]
  return {
    title: `${title} | Mayank`,
    description,
  }
}

export default async function WorkCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  if (!isWorkSlug(category)) {
    notFound()
  }

  const slug = category as WorkSlug
  const data = workCategoryContent[slug]

  return (
    <main
      className="min-h-screen text-black"
      style={editorialSurfaceStyle}
    >
      <div className={`py-12 sm:py-16 md:py-20 ${editorialContainerClass}`}>
        <nav className="mb-10 font-sans text-sm">
          <Link
            href="/#recent-work"
            className="inline-flex items-center gap-1 text-black/70 underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            ← Recent work
          </Link>
        </nav>

        <header className="mb-10 border-b border-black pb-8 sm:mb-12 sm:pb-10">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-black/80 sm:text-[11px]">
            Selected category
          </p>
          <h1
            className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            {data.title}
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-black/75 sm:text-base">
            {data.description}
          </p>
        </header>

        <WorkShowcase data={data} />
      </div>
    </main>
  )
}
