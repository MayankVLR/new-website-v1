import type { WorkCategoryPageData } from "@/lib/work-categories"

type WorkShowcaseProps = {
  data: WorkCategoryPageData
}

export function WorkShowcase({ data }: WorkShowcaseProps) {
  const { embeds } = data

  if (embeds.length === 0) {
    return (
      <div className="rounded-md border border-dashed border-black/25 bg-black/[0.02] px-6 py-16 text-center">
        <p className="font-sans text-sm leading-relaxed text-black/70 sm:text-base">
          Nothing here yet. This category is ready add Drive links or
          images when you have pieces to show.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
      {embeds.map((item) => (
        <div
          key={item.src}
          className="overflow-hidden rounded-md border border-black/10 bg-black/[0.03] shadow-sm ring-1 ring-black/5"
        >
          <div className="aspect-video w-full">
            <iframe
              src={item.src}
              title={item.label}
              className="h-full w-full"
              allow="autoplay; fullscreen"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
