import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { LiteYTEmbed } from '@justinribeiro/lite-youtube';

type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>;

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      ['lite-youtube']: CustomElement<LiteYTEmbed>;
    }
  }
}
const MusiquePage = () => {
  
return (
    <Layout pageTitle="Musique">
        <div className='text-jmv_white'>
            <div>
                
            </div>
            <h2 className='text-xl text-jmv_light'>Compos, arrangements, interprétations</h2>
            <div className='aspect-video w-96'>
              <lite-youtube videoId='B3IEiCGBJ6s' title='Like Someone In Love'></lite-youtube>
            </div>
            <audio controls>
              <source src='../audios/direct_st-sauveur.mp3' type='audio/mpeg'/>
              <source src="../audios/direct_st-sauveur.ogg" type="audio/ogg"/>
            </audio> 

            <h2 className='text-xl text-jmv_light'>Avec Claudia Caron</h2>
            <div className='aspect-video w-96'>
              <lite-youtube videoId="h-GswqZiHGU" title='Claudia Caron Trio'></lite-youtube>
            </div>
            <div className='aspect-video w-96'>
              <lite-youtube videoId="F0vM01LoRDg" title="Je Veux (Zaz cover) - Claudia Caron"></lite-youtube>
            </div>
            <h2 className='text-xl text-jmv_light'>Duo Pichenotte</h2>
            <iframe className="border-0 w-full h-32" src="https://bandcamp.com/EmbeddedPlayer/album=1471944775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://leduopichenotte.bandcamp.com/album/with-friends-for-christmas">With friends, for Christmas de Le Duo Pichenotte</a></iframe>
            <iframe className="border-0 w-full h-32" src="https://bandcamp.com/EmbeddedPlayer/album=3343381706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://leduopichenotte.bandcamp.com/album/comme-un-manouche">Comme Un Manouche de Le Duo Pichenotte</a></iframe>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fduopichenotte%2Fvideos%2F1051388251728376%2F&show_text=false&width=560&t=0" className="border-0 w-96 aspect-video overflow-hidden" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
            <h2 className='text-xl text-jmv_light'>La Revoir</h2>
            <h2 className='text-xl text-jmv_light'>Marine</h2>
            <div className='aspect-video w-96'>
              <lite-youtube videoId='XOkeHWtaB4c' title="You Don't Know What Love Is - Guitare solo"></lite-youtube>
            </div>
        </div>
    </Layout>
)
}

export default MusiquePage

export const Head = () => (
<Seo title="Musique" />
)