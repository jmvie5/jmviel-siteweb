import { Link } from "react-router"
import { twMerge } from 'tailwind-merge'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface NavbarProps {
    locale: string;
    dark?: boolean;
    more?: boolean;
    menuLinks: {name:string, url:string}[]
}

export default function NavBar({locale, menuLinks, dark, more}: NavbarProps) {



    const navButton =
        <Menu>
            <MenuButton className="text-jmv_dark bg-jmv_white hover:bg-gray-300 hover:ring-1 hover:ring-jmv_light active:bg-jmv_white focus:outline-none focus:ring-1 focus:ring-jmv_light rounded-md p-2 ml-4 mt-2 w-32 self-center">
            Menu
            </MenuButton>
            <MenuItems
                transition
                anchor="bottom end"
                className="z-50 absolute top-full sm:self-center left-0 w-60 mt-2 ml-4 rounded-md shadow-md shadow-jmv_light bg-jmv_white  p-1 text-sm/6 text-white transition duration-200 ease-out [--anchor-gap:var(--spacing-1)] transform data-[closed]:-translate-x-full focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                {menuLinks.map(link => (
                    <MenuItem key={link.name}>
                        <Link 
                            to={link.url}
                            className={twMerge('hover:bg-gradient-to-r from-jmv_light hover:text-jmv_dark text-jmv_lessDark block rounded-l-full ml-2 px-4 py-2 text-sm')}
                        >{link.name}</Link>
                    </MenuItem>
                        
                ))}
            </MenuItems>
        </Menu>

    

    const navFull = 
        <ul className='flex py-4 ml-4 divide-x divide-jmv_light border-b border-jmv_light max-w-fit'>
            {menuLinks.map(link => (
                <li key={link.name}>
                    <Link 
                        to={link.url}
                        className={twMerge('block xl:text-lg text-md ml-4 pr-4 whitespace-nowrap', dark ? "hover:text-jmv_medium text-jmv_dark" : "hover:text-jmv_light text-jmv_white")}
                    >{link.name}</Link>
                </li>
            ))}
        </ul> 

    return (
        <div className='flex flex-col place-self-start'>
            {more ?
            <>
                <div className='flex sm:hidden'>
                    {navButton}
                </div>
                <div className='hidden sm:flex'>
                    {navFull} 
                </div>
            </>
            :
            <>
                <div className='flex lg:hidden'>
                    {navButton}
                </div>
                <div className='hidden lg:flex'>
                    {navFull} 
                </div>
            </>
            }
                
        </div>
    )
}