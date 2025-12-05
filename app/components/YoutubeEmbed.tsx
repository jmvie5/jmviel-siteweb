import { useState } from 'react'

export default function YoutubeEmbed({
  id,
  title,
}: {
  id: string
  title: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-content1 ring-1 ring-content3/50 shadow-sm">
        {!isLoaded ? (
          <div
            className="relative aspect-video cursor-pointer rounded-xl overflow-hidden"
            onClick={() => setIsLoaded(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center w-[68px] h-[48px] m-auto">
              <img
                alt={'Youtube Logo'}
                src={
                  'https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg'
                }
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <iframe
            title={title}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=1`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
      <span className="text-center text-sm text-foreground/70">{title}</span>
    </div>
  )
}
