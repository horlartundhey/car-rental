const steps = [
  {
    number: '01',
    title: 'Choose Your Vehicle',
    description: 'Browse the fleet and find the vehicle that fits your journey.',
  },
  {
    number: '02',
    title: 'Contact Us on WhatsApp',
    description: 'Send a pre-filled booking message straight from the vehicle page.',
  },
  {
    number: '03',
    title: 'Confirm Your Rental',
    description: 'We confirm availability and finalize the details with you directly.',
  },
]

const HowItWorks = () => {
  return (
    <section className="bg-background-alt border-y border-border">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">How It Works</p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 max-w-xl">
          Booking Made Simple
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-4xl text-gold/40">{step.number}</span>
              <h3 className="font-display text-lg text-foreground mt-3 mb-2">{step.title}</h3>
              <p className="text-sm text-foreground-subtle leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
