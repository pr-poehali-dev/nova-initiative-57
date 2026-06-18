import { motion } from 'framer-motion'
import { useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Layout from './Layout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { sections } from './sections'

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const trailer = sections.find(s => s.id === 'about')!
  const presentation = sections.find(s => s.id === 'hero')!

  return (
    <Layout>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#C194E3] origin-left z-30"
        style={{ scaleX }}
      />
      <div className="fixed top-4 left-0 right-0 flex justify-center z-30">
        <span className="text-sm text-teal-400">Выполнила Лукьянова Валерия, 1525д</span>
      </div>
      <div
        ref={containerRef}
        className="h-full overflow-y-auto"
      >
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* Левая — Трейлер */}
          <motion.div
            className="flex-1 flex flex-col justify-center p-8 md:p-14 border-b md:border-b-0 md:border-r border-[#e8e4d0]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#FF8C00] mb-6">{trailer.title}</h2>
            {trailer.images && (
              <div className="flex gap-3 mb-8">
                {trailer.images.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt=""
                    className="w-20 h-20 object-cover rounded-xl shadow"
                    animate={{ rotate: [0, 2, -2, 1, -1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 + i * 0.3, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            )}
            <Button
              variant="outline"
              size="lg"
              className="w-fit text-[#00B5AD] bg-transparent border-[#00B5AD] hover:bg-[#00B5AD] hover:text-white transition-colors"
              onClick={() => window.open(trailer.buttonUrl, '_blank')}
            >
              {trailer.buttonText}
            </Button>
          </motion.div>

          {/* Разделитель по центру (только на мобиле горизонтальный) */}
          <div className="hidden md:flex items-center px-2">
            <div className="h-2/3 w-px bg-gradient-to-b from-transparent via-[#C194E3] to-transparent" />
          </div>

          {/* Правая — Презентация */}
          <motion.div
            className="flex-1 flex flex-col justify-center p-8 md:p-14"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {presentation.subtitle && (
              <div className="mb-5">{presentation.subtitle}</div>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF8C00] leading-snug mb-8 max-w-sm">
              {presentation.title}
            </h2>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-fit text-[#00B5AD] bg-transparent border-[#00B5AD] hover:bg-[#00B5AD] hover:text-white transition-colors"
                onClick={() => window.open('https://cloud.mail.ru/public/v27L/6dpQjh6xG', '_blank')}
              >
                {presentation.buttonText}
              </Button>
              {presentation.buttonImage && (
                <img src={presentation.buttonImage} alt="" className="w-12 h-12 rounded-full object-cover" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
