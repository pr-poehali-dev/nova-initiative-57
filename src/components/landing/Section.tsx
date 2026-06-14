import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, buttonImage, images }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
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
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-[#FF8C00]"
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