import { motion } from 'motion/react'

// Fades a section up into place the first time it scrolls into view.
const Reveal = ({ children, className = '', delay = 0, as = 'div' }) => {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
