import type { Route } from './+types/index'
import i18nServer from '~/i18next.server'
import DadScrabble from '~/games/dadScrabble/DadScrabble'
import MazeView from '~/games/maze/MazeView'
import { Tab, Tabs } from '@heroui/react'

export async function loader({ request, params }: Route.LoaderArgs) {
  const locale = params.lang ? params.lang : await i18nServer.getLocale(request)

  const t = await i18nServer.getFixedT(locale)

  const title = t('games-title')
  const description = t('games-desc')

  return { title, description }
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

export default function GamesPage() {
  return (
    <div className={'flex flex-col items-center bg-content3 p-4 rounded-2xl '}>
      <Tabs
        aria-label="Games"
        color={'primary'}
        size={'lg'}
        classNames={{
          tabList: 'p-2',
          tabContent: 'rounded-full',
        }}
      >
        <Tab key="dad-scrabble" title="Dad Scrabble">
          <DadScrabble />
        </Tab>
        <Tab key="maze" title="Maze">
          <MazeView />
        </Tab>
      </Tabs>
    </div>
  )
}
