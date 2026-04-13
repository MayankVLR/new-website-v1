import { AboutSection } from "@/components/about-section"
import { HeroSection } from "@/components/hero-section"
import { RecentWorkSection } from "@/components/recent-work-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecentWorkSection />
      <AboutSection />
      <SiteFooter />
    </main>
  )
}
