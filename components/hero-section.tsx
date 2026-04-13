"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { GridBackground } from "./grid-background"
import { StickyNote } from "./sticky-note"
import { SketchButton } from "./sketch-button"
import { DraggableCard } from "./draggable-card"

const FULL_NAME = "Mayank"

// widthVw / heightVw are fractions of 1 viewport width (e.g. 0.15 = 15vw)
const photoCards = [
  {
    src: "/WhatsApp Image 2026-04-12 at 8.21.29 PM.jpeg" ,
    alt: "Friends at event",
    caption: "Drawing",
    initialX: 3,
    initialY: 8,
    rotation: -12,
    widthVw: 0.15,
    heightVw: 0.15,
  },
  {
    src: "/WhatsApp Image 2026-04-04 at 9.20.08 PM (1).jpeg",
    alt: "Coffee cups",
    caption: "Chai",
    initialX: 74,
    initialY: 4,
    rotation: 8,
    widthVw: 0.15,
    heightVw: 0.15,
  },
  {
    src: "/WhatsApp Image 2026-04-12 at 5.43.10 PM (1).jpeg",
    alt: "Laptop workspace",
    caption: "Stay humble always",
    initialX: 76,
    initialY: 38,
    rotation: 5,
    widthVw: 0.15,
    heightVw: 0.15,
  },
  {
    src: "/WhatsApp Image 2026-04-12 at 5.43.10 PM (2).jpeg",
    alt: "Sony cameras",
    caption: "first camera",
    initialX: 2,
    initialY: 60,
    rotation: -8,
    widthVw: 0.15,
    heightVw: 0.15,
  },
  {
    src: "/WhatsApp Image 2026-04-12 at 5.43.10 PM.jpeg",
    alt: "Badminton rackets",
    caption: "Game time",
    initialX: 6,
    initialY: 33,
    rotation: 15,
    widthVw: 0.15,
    heightVw: 0.15,
  },
  {
    src: "/WhatsApp Image 2026-04-12 at 5.43.13 PM.jpeg",
    alt: "Airport at night",
    caption: "Travel",
    initialX: 71,
    initialY: 70,
    rotation: -6,
    widthVw: 0.15,
    heightVw: 0.15,
  },
]

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    // Small delay before starting so the page settles
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 90)
      return () => clearInterval(interval)
    }, 400)
    return () => clearTimeout(timeout)
  }, [text])

  return (
    <span>
      {displayed}
      {!done && (
        <motion.span
          className="inline-block w-[3px] h-[0.85em] bg-white align-middle ml-1 mb-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      )}
    </span>
  )
}

export function HeroSection() {
  // This ref is passed to every DraggableCard as the drag constraint boundary
  const constraintsRef = useRef<HTMLElement | null>(null)

  return (
    <section
      ref={constraintsRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <GridBackground />

      {/* Sticky Note */}
      <StickyNote text="The best edit is invisible — you feel the emotion." />

      {/* Photo Cards */}
      {photoCards.map((card, index) => (
        <DraggableCard
          key={index}
          src={card.src}
          alt={card.alt}
          initialX={card.initialX}
          initialY={card.initialY}
          rotation={card.rotation}
          index={index}
          widthVw={card.widthVw}
          heightVw={card.heightVw}
          caption={card.caption}
          constraintsRef={constraintsRef}
        />
      ))}

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
        <motion.h1
          className="px-3 text-center font-serif text-[clamp(2.25rem,10vw+0.5rem,9rem)] leading-[0.95] tracking-tight text-white sm:px-4"
          style={{ fontFamily: "var(--font-serif), 'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TypewriterText text={FULL_NAME} />
        </motion.h1>

        <motion.p
          className="mt-4 max-w-md px-4 text-center font-sans text-sm font-medium tracking-wide text-white/85 sm:text-base md:mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          Motion designer &amp; video editor · India
        </motion.p>

        <div className="mt-8 pointer-events-auto sm:mt-10">
          <SketchButton
            onClick={() =>
              document
                .getElementById("recent-work")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            View Work
          </SketchButton>
        </div>

        <motion.p
          className="mt-8 text-xs font-sans uppercase tracking-[0.3em] text-white/60 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          Drag to move
        </motion.p>
      </div>
    </section>
  )
}
