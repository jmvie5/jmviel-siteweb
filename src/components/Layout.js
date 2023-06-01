import * as React from 'react'
import NavBar from './NavBar'
import { StaticImage } from 'gatsby-plugin-image'


const Layout = ({ pageTitle, children }) => {

    return (
        <div className="min-h-screen flex flex-col justify-between bg-jmv_dark">
            <main className="flex flex-col">
                <div className="">
                    <NavBar/>
                </div>
                <div className='m-2 sm:m-4'>
                    <h2 className='text-jmv_light text-xl my-4'>{pageTitle}</h2>
                    {children}
                </div>
            </main>
            <footer className='flex flex-col xs:flex-row gap-4 justify-around text-jmv_white m-4 pt-4 border-t border-jmv_light' >
                <a href='mailto:info@jeanmichelviel.ca' className='hover:underline self-center'>info@jeanmichelviel.ca</a>
                <div className='flex flex-col md:flex-row self-center gap-4'>
                    <a href='https://www.github.com/jmvie5/' className='flex space-x-1.5 group'>
                        <StaticImage src='../images/github.png'
                            alt='GitHub Logo' width={30} height={30} className='aspect-square'/>
                        <p className='group-hover:underline'>@jmvie5</p>
                    </a>
                    <a href='https://www.linkedin.com/in/jeanmichelviel/' className='flex space-x-1.5 group'>
                        <StaticImage src='../images/linkedin.png'
                            alt='LinkedIn Logo' width={30} height={30} className='aspect-square'/>
                        <p className='group-hover:underline'>@jeanmichelviel</p>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Layout