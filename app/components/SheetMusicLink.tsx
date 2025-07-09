import { openInNewIcon } from '~/assets/icons'

export default function SheetMusicLink({
  name,
  url,
}: {
  name: string
  url: string
}) {
  return (
    <div className='before:content-["•"] flex'>
      <a
        href={url}
        className="hover:underline flex ml-1"
        target="_blank"
        rel="noreferrer"
      >
        <p className="w-[220px] ">{name}</p>
        <span className="ml-1">{openInNewIcon}</span>
      </a>
    </div>
  )
}
