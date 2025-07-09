import { useLocation, Link } from 'react-router'
import { useLocale } from 'remix-i18next/react'
import i18nConfig, { urlTranslationSearchString } from '~/i18n'
import { t } from 'i18next'
import { langIcon } from '~/assets/icons'

export default function LocaleSwitch() {
  const { supportedLngs } = i18nConfig

  const location = useLocation().pathname
  let locationNoLng = location.split('/')[location.split('/').length - 1]
  const locale = useLocale() as 'fr' | 'en'

  if (supportedLngs.includes(locationNoLng)) {
    locationNoLng = ''
  }

  const otherLng = {
    fr: 'en',
    en: 'fr',
  }

  return (
    <Link
      to={`/${otherLng[locale]}/${t(urlTranslationSearchString[locale][locationNoLng], { lng: otherLng[locale] }) || ''}`}
      className="flex gap-1 rounded bg-jmv_white/80 p-2 text-black transition hover:bg-jmv_white/90 focus-visible:bg-jmv_white/95 active:scale-[97%]"
    >
      {langIcon}
      {t(locale)}
    </Link>
  )
}
