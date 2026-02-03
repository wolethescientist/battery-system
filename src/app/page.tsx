import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProcessSection from '@/components/ProcessSection'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <ProcessSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
