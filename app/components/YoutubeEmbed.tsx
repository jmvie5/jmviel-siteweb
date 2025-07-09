export default function YoutubeEmbed({
  id,
  title,
}: {
  id: string
  title: string
}) {
  return (
    <div className={'flex flex-col aspect-video w-full'}>
      <iframe
        title={title}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}?autoplay=0&rel=1`}
      />
      <span className="text-sm text-jmv_white text-center">{title}</span>
    </div>
  )
}
