import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, CakeSlice, Gift, Heart, Sparkles, Stars } from 'lucide-react'
import Reveal from './Reveal'
import { birthdayData as data } from '../data/birthday'

const placeholderPhoto = `${import.meta.env.BASE_URL}images/gobi-main-placeholder.jpg`
const wishCards = [
  { icon: '☀️', title: 'Nhiều niềm vui', text: 'Mong mỗi ngày mới đều có một điều bé xíu khiến Gobi mỉm cười.', className: 'pastel-peach' },
  { icon: '🌷', title: 'Luôn được yêu thương', text: 'Ở bên những người chân thành, dịu dàng và luôn trân trọng Gobi.', className: 'pastel-pink' },
  { icon: '✨', title: 'Mọi điều như ý', text: 'Những dự định thành hình và mọi nỗ lực đều được hồi đáp xứng đáng.', className: 'pastel-yellow' },
]
const confetti = Array.from({ length: 20 }, (_, i) => ({ left: `${(i * 37) % 96}%`, top: `${12 + ((i * 43) % 78)}%`, rotate: `${i * 31}deg` }))
const galleryCaptions = [
  'Một chiếc Gobi e thẹn',
  'Chụp hình mà không dám đứng kế nè mí che',
  'couple hụt he kk',
  'Quá đẹp chai đẹp gái',
  'Nhớ khúc này mới sợ',
  'khúc này dám đứng kế rồi mà cũng còn e thẹn nè:))',
]
const galleryPhotos = galleryCaptions.map((caption, index) => ({
  src: `${import.meta.env.BASE_URL}images/gallery-placeholder-${index + 1}.jpg`,
  alt: `Ảnh placeholder Gallery số ${index + 1}`,
  caption,
}))

function TopNav() {
  return <nav className="sample-nav" aria-label="Điều hướng sinh nhật"><a href="#birthday-home" className="nav-brand"><span className="nav-cake">🎂</span><strong>Happy Birthday!</strong></a><div className="nav-text-links"><a href="#wishes">Wishes</a><a href="#gallery">Gallery</a><a href="#surprise">Surprises</a></div></nav>
}

function BalloonCluster() {
  return <div className="balloon-cluster" aria-hidden="true"><i className="balloon balloon-coral" /><i className="balloon balloon-clear" /><i className="balloon balloon-gold" /><span className="balloon-string string-one" /><span className="balloon-string string-two" /><span className="balloon-string string-three" /></div>
}

function Hero() {
  return <section id="birthday-home" className="sample-hero">
    <div className="hero-confetti" aria-hidden="true">{confetti.map((piece, i) => <i key={i} style={piece} />)}</div>
    <div className="hero-copy-new">
      <Reveal><p className="hero-script-kicker">✦ Happy Birthday! ✦</p></Reveal>
      <Reveal delay={.08}><h1 className="hero-message-title"><span>Gửi gắm đến Gobi</span><em>những điều nhỏ xíu</em></h1></Reveal>
      <Reveal delay={.14}><p className="hero-wish">Chúc Gobi một ngày ngập tràn niềm vui,<br />và tất cả những điều mình muốn.</p></Reveal>
      <Reveal delay={.2}><a className="surprise-button" href="#surprise"><Heart size={17} fill="currentColor" /> Mở món quà bất ngờ <ArrowRight size={17} /></a></Reveal>
      <Reveal delay={.28} className="mini-wish-card"><div className="mini-gift">🎁</div><div><strong>BIRTHDAY WISH FOR YOU <Sparkles size={14} /></strong><p>Mong ngày đặc biệt này mang đến cho Gobi thật nhiều hạnh phúc và những kỷ niệm tuyệt vời! <Heart size={12} fill="currentColor" /></p><span>From someone who cares about you 🧡</span></div></Reveal>
    </div>
    <div className="hero-collage">
      <motion.figure className="main-polaroid" initial={{ opacity: 0, y: 30, rotate: 5 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ duration: 1 }}><span className="photo-tape" /><img src={data.memories[0].src} alt={data.memories[0].alt} /></motion.figure>
      <div className="small-polaroids">{data.memories.slice(1).map((memory, index) => <motion.figure key={memory.src} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0, rotate: index === 0 ? -4 : index === 2 ? 5 : -1 }} transition={{ delay: .35 + index * .12, duration: .7 }}><img src={memory.src} alt={memory.alt} /></motion.figure>)}</div>
      <BalloonCluster /><div className="amazing-badge"><Heart size={23} /><span>Gobi thật<br /><strong>tuyệt vời!</strong></span></div><div className="sparkle-doodle"><Stars size={45} /></div>
    </div><a href="#wishes" className="scroll-cue"><span /><ArrowDown size={16} /></a>
  </section>
}

function Wishes() {
  return <section id="wishes" className="wishes-reference">
    <div className="wishes-reference-top">
      <Reveal className="wishes-reference-copy"><p>✦ Happy Birthday! ✦</p><h2>Chúc Gobi<br /><em>ẫm trọn 3 điều</em></h2><span>Gói một chút nắng, một chút hoa và thật nhiều may mắn<br />gửi đến tuổi mới của Gobi. 💗</span></Reveal>
      <Reveal className="wishes-reference-photo"><figure><i className="wish-photo-tape" /><img src={placeholderPhoto} alt="Ảnh placeholder trong phần lời chúc" /></figure><div className="wish-photo-note">Today is<br />all about<br /><em>you!</em></div><div className="wish-photo-balloons"><i /><i /></div></Reveal>
    </div>
    <div className="wish-card-grid">{wishCards.map((wish, index) => <Reveal key={wish.title} delay={index * .1} className={`soft-wish-card ${wish.className}`}><span className="wish-emoji">{wish.icon}</span><small>0{index + 1}</small><h3>{wish.title}</h3><i className="card-line" /><p>{wish.text}</p><Heart size={18} /></Reveal>)}</div>
    <Reveal className="quote-ribbon"><Sparkles size={18} /><p>“{data.highlight}”</p><Sparkles size={18} /></Reveal>
  </section>
}

function Gallery() {
  return <section id="gallery" className="warm-section gallery-new"><Reveal className="warm-heading gallery-heading"><span>02 · OUR LITTLE GALLERY</span><h2>Những khoảnh khắc<em>“năm ấy hẹ hẹ”.</em></h2></Reveal><div className="polaroid-wall">{galleryPhotos.map((memory,index)=><Reveal key={memory.src} delay={index*.08} className={`wall-photo wall-photo-${index+1}`}><figure><span className="wall-tape"/><img src={memory.src} alt={memory.alt} loading="lazy"/><figcaption><span>{memory.caption}</span><Heart size={14} fill="currentColor"/></figcaption></figure></Reveal>)}<div className="gallery-note">little moments,<br/><strong>big memories</strong> ✦</div></div><Reveal className="gallery-end-note"><span>♡</span><p>Thấy hối hận khi bỏ lỡ Gobu chưa haha</p><span>♡</span></Reveal></section>
}

function Surprise() {
  const [open,setOpen]=useState(false)
  return <section id="surprise" className="surprise-new"><div className="surprise-balloons" aria-hidden="true"><i/><i/><i/></div><Reveal className="surprise-title"><span>03 · ONE LAST SURPRISE</span><h2>Có một lời nhắn<br/>dành riêng cho <em>Gobi.</em></h2></Reveal><AnimatePresence mode="wait">{!open?<motion.button key="closed" exit={{opacity:0,scale:.9}} onClick={()=>setOpen(true)} className="gift-box-button"><span className="gift-lid"><i/></span><span className="gift-base"><Gift size={50}/></span><small>Chạm để mở quà</small></motion.button>:<motion.article key="open" className="surprise-letter" initial={{opacity:0,y:50,rotate:-2}} animate={{opacity:1,y:0,rotate:0}} transition={{duration:.75}}><div className="letter-top"><span>Dear Gobi,</span><Heart fill="currentColor"/></div>{data.message.map(paragraph=><p key={paragraph}>{paragraph}</p>)}<blockquote>Tuổi mới cứ thật rực rỡ theo cách của riêng mình nhé!</blockquote><footer>Happy Birthday! ♡</footer></motion.article>}</AnimatePresence></section>
}

function Finale() {
  const [wished,setWished]=useState(false); const reduced=useReducedMotion()
  return <footer className="warm-finale">{!reduced&&<div className="final-confetti" aria-hidden="true">{confetti.map((piece,i)=><i key={i} style={piece}/>)}</div>}<div className="final-cake"><span>✦</span>🎂<span>✦</span></div><p>MAKE A WISH</p><h2>Happy Birthday,<br/><em>Gobi!</em></h2><div className="final-message">{data.finalMessage}</div><button onClick={()=>setWished(true)} className="surprise-button final-button"><CakeSlice size={18}/>{wished?'Điều ước đang thành hiện thực ✨':'Thổi nến và ước một điều'}</button><span className="final-signoff">Made with love, just for you ♡</span></footer>
}

export default function BirthdayJourney(){return <div className="birthday-journey"><TopNav/><Hero/><Wishes/><Gallery/><Surprise/><Finale/></div>}
