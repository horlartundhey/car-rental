import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../assets/faqs'
import WhatsAppButton from '../components/WhatsAppButton'

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3">FAQ</p>
          <h1 className="font-display text-3xl md:text-5xl text-foreground">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-surface border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base text-foreground">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gold shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-sm text-foreground-muted leading-relaxed px-6 pb-5">{faq.answer}</p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-14 bg-surface border border-border rounded-2xl p-6 text-center">
          <p className="text-foreground font-display mb-1">Still have a question?</p>
          <p className="text-sm text-foreground-subtle mb-5">
            Message us directly and we'll get back to you.
          </p>
          <WhatsAppButton
            label="Chat on WhatsApp"
            className="justify-center w-fit mx-auto bg-gold text-charcoal font-display px-7 py-3 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ
