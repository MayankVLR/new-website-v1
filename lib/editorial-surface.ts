import type { CSSProperties } from "react"

/** Cream page + tan grid — shared by Recent Work, About, Footer */
export const EDITORIAL_PAGE_BG = "#fdf8f1"

export const editorialSurfaceStyle: CSSProperties = {
  backgroundColor: EDITORIAL_PAGE_BG,
  backgroundImage: `
    linear-gradient(to right, rgba(200, 175, 140, 0.22) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(200, 175, 140, 0.22) 1px, transparent 1px)
  `,
  backgroundSize: "44px 44px",
}

/** Horizontal padding aligned across editorial sections (extra air on small screens) */
export const editorialContainerClass =
  "mx-auto w-full max-w-[1100px] px-4 min-[420px]:px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20"