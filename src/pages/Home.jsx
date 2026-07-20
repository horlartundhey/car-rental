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

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedFleet />
      <VideoSection />
      <WhyChooseUs />
      <ApartmentsTeaser />
      <ServicesTeaser />
      <HowItWorks />
      <FinalCTA />
    </div>
  )
}

export default Home
