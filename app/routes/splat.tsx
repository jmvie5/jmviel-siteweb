import { redirect, type LoaderFunctionArgs } from 'react-router'
import i18nServer from '../i18next.server.js'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const locale = params.lang ? params.lang : await i18nServer.getLocale(request)

  const url = new URL(request.url)
  const searchParams = url.searchParams

  if (searchParams.size) {
    throw redirect(`/?${searchParams.toString()}`, 302)
  } else {
    throw redirect(`/${locale}`)
  }
}
