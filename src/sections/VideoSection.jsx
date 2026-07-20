import cityNightLoop from '../assets/video/city-night-loop.mp4'
import cityNightPoster from '../assets/video/city-night-poster.jpg'

const VideoSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={cityNightLoop}
        poster={cityNightPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">A Complete Life Package</p>
        <h2 className="font-display text-3xl md:text-5xl text-offwhite max-w-xl leading-[1.1]">
          Wherever the Journey Takes You, We've Got You Covered.
        </h2>
        <p className="text-zinc-300 mt-4 max-w-lg leading-relaxed">
          Car rental, chauffeur service, and shortlet apartments — one team, anywhere within or
          outside Lagos.
        </p>
      </div>
    </section>
  )
}

export default VideoSection
