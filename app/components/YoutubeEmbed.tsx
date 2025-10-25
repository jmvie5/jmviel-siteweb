export default function YoutubeEmbed({
  id,
  title,
}: {
  id: string
  title: string
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-content1 ring-1 ring-content3/50 shadow-sm">
        <iframe
          title={title}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&rel=1`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <span className="text-center text-sm text-foreground/70">{title}</span>
    </div>
  )
}
