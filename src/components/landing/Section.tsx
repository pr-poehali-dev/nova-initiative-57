import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, buttonImage, buttonUrl, images, videoUrl }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col items-center justify-center text-center p-6 md:p-12 lg:p-16">
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-2xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] font-bold leading-[1.2] tracking-tight max-w-4xl text-[#FF8C00]"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-[#00B5AD]"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {videoUrl && (
        <motion.div
          className="mt-6 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={videoUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      )}
      {images && images.length > 0 && (
        <motion.div
          className="flex gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              className="w-20 h-20 object-cover rounded-lg"
              animate={{ rotate: [0, 2, -2, 1, -1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 + i * 0.3, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="text-[#00B5AD] bg-transparent border-[#00B5AD] hover:bg-[#00B5AD] hover:text-white transition-colors"
              onClick={() => window.open(buttonUrl || 'https://cloud.mail.ru/public/v27L/6dpQjh6xG', '_blank')}
            >
              {buttonText}
            </Button>
            {buttonImage && (
              <img src={buttonImage} alt="" className="w-12 h-12 rounded-full object-cover" />
            )}
          </div>
        </motion.div>
      )}
    </section>
  )
}