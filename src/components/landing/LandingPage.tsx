import { motion, useScroll, useSpring, useAnimationFrame } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Layout from './Layout'
import Section from './Section'
import { sections } from './sections'

function DvdBounce() {
  const size = 64
  const pos = useRef({ x: 100, y: 100 })
  const vel = useRef({ x: 1.8, y: 1.4 })
  const [xy, setXY] = useState({ x: 100, y: 100 })

  useAnimationFrame(() => {
    const W = window.innerWidth - size
    const H = window.innerHeight - size
    pos.current.x += vel.current.x
    pos.current.y += vel.current.y
    if (pos.current.x <= 0 || pos.current.x >= W) vel.current.x *= -1
    if (pos.current.y <= 0 || pos.current.y >= H) vel.current.y *= -1
    pos.current.x = Math.max(0, Math.min(W, pos.current.x))
    pos.current.y = Math.max(0, Math.min(H, pos.current.y))
    setXY({ x: pos.current.x, y: pos.current.y })
  })

  return (
    <img
      src="https://cdn.poehali.dev/projects/407aeb7d-ee5b-46b4-96c3-2b0a3a7bc4ae/bucket/5e228964-5353-406b-b441-d07c7ff40e97.png"
      alt=""
      className="fixed z-20 pointer-events-none select-none"
      style={{
        left: xy.x,
        top: xy.y,
        width: size,
        height: size,
        objectFit: 'contain',
      }}
    />
  )
}

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
      }
    }
    const container = containerRef.current
    if (container) container.addEventListener('scroll', handleScroll)
    return () => { if (container) container.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <Layout>
      <DvdBounce />
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#C194E3] origin-left z-30"
        style={{ scaleX }}
      />
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
      <div className="fixed top-4 left-0 right-0 flex justify-center z-30">
        <span className="text-sm text-teal-400">Выполнила Лукьянова Валерия, 1525д</span>
      </div>
    </Layout>
  )
}