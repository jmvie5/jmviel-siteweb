import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  route(':lang', './components/SiteLayout.tsx', [
    index('routes/index.tsx'),
    route('a-propos', './routes/a-propos.tsx', { id: 'about-fr' }),
    route('about', './routes/a-propos.tsx', { id: 'about-en' }),
    route('musique', './routes/musique.tsx', { id: 'music-fr' }),
    route('music', './routes/musique.tsx', { id: 'music-en' }),
    route('informatique', './routes/informatique.tsx', { id: 'cs-fr' }),
    route('computer-science', './routes/informatique.tsx', { id: 'cs-en' }),
    route('jeux', './routes/games.tsx', { id: 'games-fr' }),
    route('games', './routes/games.tsx', { id: 'games-en' }),
  ]),
  route(':lang/*', './routes/splat.tsx'),
] satisfies RouteConfig
