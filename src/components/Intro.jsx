import { motion, useReducedMotion } from 'framer-motion'
import { Gift, Sparkles } from 'lucide-react'

export default function Intro({ data, onOpen }) {
  const reduced = useReducedMotion()
  return (
    <motion.section className="intro fixed inset-0 z-50 grid min-h-[100svh] place-items-center overflow-hidden px-6" exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.06, filter: 'blur(12px)' }} transition={{ duration: .85 }} aria-labelledby="intro-title">
      <div className="aurora aurora-one" aria-hidden="true" /><div className="aurora aurora-two" aria-hidden="true" />
      <div className="stars absolute inset-0" aria-hidden="true">{Array.from({ length: 22 }, (_, index) => <i key={index} className="star" />)}</div>
      <motion.div className="relative z-10 max-w-2xl text-center" initial={reduced ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-champagne backdrop-blur-xl"><Sparkles size={22} /></div>
        <h1 id="intro-title" className="whitespace-pre-line font-display text-[clamp(2.4rem,8vw,5.4rem)] font-medium leading-[1.08] tracking-[-.045em] text-white">{data.intro}</h1>
        <button onClick={onOpen} className="gift-button group mt-10 inline-flex min-h-14 items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-night"><Gift size={18} />Mở quà cho Gobi</button>
      </motion.div>
    </motion.section>
  )
}
