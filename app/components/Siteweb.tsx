import { motion, useReducedMotion } from 'framer-motion'
import {
  github_white,
  gitlab_logo,
  npm_logo,
} from '~/assets/images/informatique/index.js'
import { Link } from '@heroui/react'

interface SitewebProps {
  name: string
  id?: string
  url?: string
  description: React.ReactElement
  remoteHostUrl: string
  logoSrc?: string
  logoAlt?: string
  npmUrl?: string
}

const Siteweb = ({
  name,
  id,
  url,
  description,
  remoteHostUrl,
  logoSrc,
  logoAlt,
  npmUrl,
}: SitewebProps) => {
  const link = 'https://' + url

  const prefersReduced = useReducedMotion()
  const hoverAnim = prefersReduced ? {} : { y: -1, scale: 1.01 }

  const isGitHub = remoteHostUrl.includes('github.com')

  return (
    <motion.div
      className=" mb-4 gap-2 rounded-xl bg-content1/70 p-4 text-foreground ring-1 ring-content3/60 shadow-sm transition-colors bg-gradient-to-l from-content3 to-content4  hover:bg-content1 hover:ring-primary/60"
      whileHover={hoverAnim}
    >
      <div className="flex w-full items-center gap-4">
        <a href={link} className="w-24" target="_blank" rel="noreferrer">
          <img src={logoSrc} alt={logoAlt}></img>
        </a>
        <div className="flex flex-col justify-between gap-2">
          <div className="text-xl font-bold">{name}</div>
          <div className="flex gap-3 flex-wrap">
            <Link href={link} target="_blank" rel="noreferrer">
              {url}
            </Link>
            <Link
              color={'foreground'}
              href={remoteHostUrl}
              target="_blank"
              rel="noreferrer"
              className={
                'hover:underline underline-offset-2 decoration-secondary'
              }
            >
              <div className="flex gap-1">
                {isGitHub ? (
                  <>
                    <img
                      src={github_white}
                      alt="Github logo"
                      className="size-6"
                    />
                    <p>GitHub</p>
                  </>
                ) : (
                  <>
                    <img
                      src={gitlab_logo}
                      alt="Gitlab logo"
                      className="size-6"
                    />
                    <p>GitLab</p>
                  </>
                )}
              </div>
            </Link>
            {npmUrl && (
              <Link href={npmUrl} target="_blank" rel="noreferrer">
                <div className="flex gap-1">
                  <img src={npm_logo} alt="npm logo" className="w-14" />
                  <p></p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">{description}</div>
    </motion.div>
  )
}

export default Siteweb
