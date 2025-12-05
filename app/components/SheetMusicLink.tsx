import { Chip } from '@heroui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { openInNewIcon } from '~/assets/icons'

export default function SheetMusicLink({
  name,
  url,
}: {
  name: string
  url: string
}) {
  const prefersReduced = useReducedMotion()

  const hoverAnim = prefersReduced ? {} : { y: -1, scale: 1.01 }
  const tapAnim = prefersReduced ? {} : { scale: 0.99 }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-2 inline-flex w-full items-center gap-2 rounded-xl bg-content1/70 px-3 py-2 text-foreground ring-1 ring-content3/60 shadow-sm transition-colors hover:bg-content1 hover:ring-primary/60"
      whileHover={hoverAnim}
      whileTap={tapAnim}
    >
      <Chip size="sm" color="primary" variant="flat" className="shrink-0">
        PDF
      </Chip>
      <span className="truncate">{name}</span>
      <span className="ml-auto text-primary transition-transform group-hover:translate-x-0.5">
        {openInNewIcon}
      </span>
    </motion.a>
  )
}
