import {
  HeroSection,
  FeaturedFleet,
  VideoSection,
  WhyChooseUs,
  ApartmentsTeaser,
  ServicesTeaser,
  HowItWorks,
  FinalCTA,
} from '../sections'
import Reveal from '../components/Reveal'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Reveal>
        <FeaturedFleet />
      </Reveal>
      <VideoSection />
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <ApartmentsTeaser />
      </Reveal>
      <Reveal>
        <ServicesTeaser />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
    </div>
  )
}

export default Home
