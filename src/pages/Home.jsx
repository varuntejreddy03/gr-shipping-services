import Hero from '../sections/Hero'
import StatsBar from '../sections/StatsBar'
import ServicesGrid from '../sections/ServicesGrid'
import WhyChoose from '../sections/WhyChoose'
import PortsMap from '../sections/PortsMap'
import Testimonials from '../sections/Testimonials'
import CertBadges from '../sections/CertBadges'
import UrgentBanner from '../sections/UrgentBanner'
import ContactForm from '../sections/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyChoose />
      <PortsMap />
      <Testimonials />
      <CertBadges />
      <UrgentBanner />
      <ContactForm />
    </main>
  )
}
