import githubLogo from "../assets/images/informatique/github.webp"
interface SitewebProps {
  name: string;
  id?: string;
  url?: string;
  description: React.ReactElement;
  github: string;
  logoSrc?:string;
  logoAlt?:string;
}

const Siteweb = ({
  name,
  id,
  url,
  description,
  github,
  logoSrc,
  logoAlt
}: SitewebProps) => {
  const link = "https://" + url;

    return (
        <div className='flex flex-col rounded-xl bg-gradient-to-r from-jmv_medium to-jmv_lessDark p-4 text-jmv_white'>
            <div className='flex items-center gap-4'>
                <a href={link} className='w-24'>
                    <img src={logoSrc} alt={logoAlt}></img>
                </a>
                <div className='flex flex-col justify-between gap-2'>
                    <div className='text-xl font-bold'>{name}</div>
                    <div className='flex gap-3'>
                        <a href={link} className='hover:underline'>{url}</a>
                        <a href={github} className='hover:underline'>
                            <div className='flex gap-1'>
                                <img src={githubLogo} alt="Github logo" className="w-6"/>
                                <p>GitHub</p>
                            </div>
                        </a>
                    </div>
                    
                </div>   
            </div>
            <div className='mt-2'>{description}</div>
        </div>
  );
};

export default Siteweb;
