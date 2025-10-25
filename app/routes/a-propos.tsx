import type { Route } from './+types/a-propos'
import i18nServer from '~/i18next.server'
import { useLoaderData } from 'react-router'
import edumediaLogo from '../assets/images/informatique/edumedia-logo.svg'
import alecLogo from '../assets/images/informatique/alec-logo.svg'
import { pikado_p } from '~/assets/images/informatique/pikado_icons'
import comboJazzBoat from '../assets/images/a-propos/ComboJazzMTMBateau.webp'
import { Link } from '@heroui/react'

export async function loader({ request, params }: Route.LoaderArgs) {
  const locale = params.lang ? params.lang : await i18nServer.getLocale(request)

  const t = await i18nServer.getFixedT(locale)

  const title = t('About')
  const description = t('about-desc')

  const translations = {
    'about-desc': t('about-desc'),
    'where-I-Am': t('where-I-Am'),
    'where-I-Am-1': t('where-I-Am-1'),
    'where-I-Am-2': t('where-I-Am-2'),
    'where-I-Am-3': t('where-I-Am-3'),
    'my-background': t('my-background'),
    'about-1': t('about-1'),
    'about-2': t('about-2'),
    'contact-me': t('contact-me'),
    'about-3': t('about-3'),
    'about-4': t('about-4'),
    'about-5': t('about-5'),
    'about-6': t('about-6'),
    'about-7': t('about-7'),
    'completed-courses': t('completed-courses'),
    python: t('python'),
    cpp: t('cpp'),
    osa: t('osa'),
    algo: t('algo'),
    'about-8': t('about-8'),
    'my-projects': t('my-projects'),
    'Computer Science': t('Computer Science'),
    Music: t('Music'),
  }

  return { title, description, translations }
}

export function meta({ matches }: Route.MetaArgs) {
  type LoaderDataType = {
    title: string
    description: string
  }

  const loaderData: LoaderDataType = matches[matches.length - 1]
    ?.data as LoaderDataType

  return [
    { title: loaderData.title },
    { name: 'description', content: loaderData.description },
    { property: 'og:title', content: loaderData.title },
    { property: 'og:type', content: 'website' },
  ]
}

const AProposPage = () => {
  const translations = useLoaderData<typeof loader>().translations

  return (
    <div className="grid grid-cols-1 gap-4 mx-2 sm:mx-4 max-w-7xl self-center">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground  mb-2">
          {translations['where-I-Am']}
        </h2>
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-4">
            <p className="">
              {translations['where-I-Am-1']}
              <Link
                href="https://www.edumedia.com"
                className="font-semibold "
                target="_blank"
                rel="noreferrer"
              >
                EduMedia
              </Link>
              {translations['where-I-Am-2']}
              <Link
                href="https://alec-edu.com"
                className="font-semibold "
                target="_blank"
                rel="noreferrer"
              >
                Alec
              </Link>
              {translations['where-I-Am-3']}
              <Link
                href="https://pikado.education"
                className="font-semibold "
                target="_blank"
                rel="noreferrer"
              >
                Pikado
              </Link>
              {'.'}
            </p>
            <p className="hidden lg:inline">{translations['my-background']}</p>
          </div>
          <div className="w-full flex items-center justify-around lg-float-right p-2">
            <a href="https://www.edumedia.com" target="_blank" rel="noreferrer">
              <img
                src={edumediaLogo}
                alt="Logo EduMedia"
                className="w-fit hover-scale "
              />
            </a>
            <a
              href="https://pikado.education"
              className="w-fit pl-2 pr-1 hover-scale"
              target="_blank"
              rel="noreferrer"
            >
              {pikado_p}
            </a>
            <a href="https://alec-edu.com" target="_blank" rel="noreferrer">
              <img
                src={alecLogo}
                alt="Logo Alec"
                className="w-fit hover-scale"
              />{' '}
            </a>
          </div>
          <p className="lg:hidden">{translations['my-background']}</p>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-semibold text-foreground  mb-2">
          {translations['Music']}
        </h2>
        <div className="space-y-2 flex flex-col xs:inline">
          <img
            src={comboJazzBoat}
            alt="Spectacle sur le HMS PROTECTOR"
            className="float-right w-72 sm:w-96 mx-4 mb-2 self-center rounded-xl"
          />
          <p>{translations['about-1']}</p>
          <p>
            {translations['about-2']}{' '}
            <Link href="mailto:info@jeanmichelviel.ca">
              {translations['contact-me']}
            </Link>
          </p>
          <p>{translations['about-3']}</p>
          <p>{translations['about-4']}</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          {translations['Computer Science']}
        </h2>
        <div className="space-y-2">
          <p>
            {translations['about-5']}{' '}
            <Link href="/informatique#info-jeux">Roblox</Link>
            {translations['about-6']}
          </p>
          <p>{translations['about-7']}</p>
          <p className="mt-2">{translations['completed-courses']}</p>
          <ul className="list-disc ml-6">
            <li>{translations['python']}</li>
            <li>{translations['cpp']}</li>
            <li>{translations['osa']}</li>
            <li>{translations['algo']}</li>
          </ul>
          <p>
            {translations['about-8']}
            <Link href="/informatique#info-web">
              {translations['my-projects']}
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default AProposPage
