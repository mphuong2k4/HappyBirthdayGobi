import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Intro from './components/Intro'
import BirthdayJourney from './components/BirthdayJourney'
import MusicControl from './components/MusicControl'
import { birthdayData } from './data/birthday'

export default function App() {
  const [opened, setOpened] = useState(false)
  const openGift = () => { setOpened(true); window.setTimeout(() => window.scrollTo({ top: 0 }), 40) }
  return (
    <div className="site-wrap">
      <AnimatePresence>{!opened && <Intro data={birthdayData} onOpen={openGift} />}</AnimatePresence>
      <main className={opened ? 'opacity-100' : 'h-screen overflow-hidden opacity-0'} aria-hidden={!opened}>
        <BirthdayJourney />
      </main>
      {opened && <MusicControl shouldStart />}
    </div>
  )
}
