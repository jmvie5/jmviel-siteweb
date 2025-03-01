// import { Menu, Transition } from '@headlessui/react'
// import { FormattedMessage } from 'react-intl'
// import { LocalizedLink } from 'gatsby-plugin-i18n-l10n'
import { Link } from "react-router"
import { twMerge } from 'tailwind-merge'
import { urlTranslationSearchString } from "~/i18n"
import {t} from "i18next"

interface NavbarProps {
    locale: string,
    dark?: boolean
    more?: boolean
}

export default function NavBar({locale, dark, more}: NavbarProps) {

    // const navButton =
    //     <Menu as="div" className="flex justify-center relative mt-4 z-10">
    //         <div className=''>
    //             <Menu.Button className="text-jmv_dark bg-jmv_white hover:bg-gray-300 hover:ring-1 hover:ring-jmv_light active:bg-jmv_white focus:outline-none focus:ring-1 focus:ring-jmv_light rounded-md p-2 ml-4 w-32 self-center">
    //             Menu
    //             </Menu.Button>
    //         </div>

    //         <Transition
    //             // as={React.Fragment}
    //             enter="transition ease-out duration-300"
    //             enterFrom="transform opacity-0 -translate-x-full scale-95"
    //             enterTo="transform opacity-100 translate-x-0 scale-100"
    //             leave="transition ease-in duration-200"
    //             leaveFrom="transform opacity-100 translate-x-0 scale-100"
    //             leaveTo="transform opacity-0 -translate-x-full scale-95"
    //         >
                
    //             <Menu.Items className="absolute top-full sm:self-center left-0 w-60 mt-2 ml-4 rounded-md shadow-lg bg-jmv_white ring-1 ring-jmv_lessDark ring-opacity-5 focus:outline-none max-w-sm">
    //                 <div className="py-1">
    //                     {/* {siteMetadata.menuLinks.map(link => (
    //                         <Menu.Item key={link.name}>
    //                             {() => (
    //                                 <LocalizedLink to={link.link} className='hover:bg-gradient-to-r from-jmv_light hover:text-jmv_dark text-jmv_lessDark block rounded-l-full ml-2 px-4 py-2 text-sm'
    //                                 >
    //                                     <FormattedMessage id={link.name}/>
    //                                 </LocalizedLink>
    //                             )}
    //                         </Menu.Item>
    //                     ))} */}
    //                 </div>
    //             </Menu.Items>
    //         </Transition>
    //     </Menu>

    const menuLinks = [
        {
          name: t("Home"),
          link: `/${locale}/`,
        },
        {
          name: t("About"),
          link: `/${locale}/${t(urlTranslationSearchString['en']['about'])}`,
        },
        {
          name: t("Music"),
          link: `/${locale}/${t(urlTranslationSearchString['en']['music'])}`,
        },
        {
          name: t("Computer Science"),
          link: `/${locale}/${t(urlTranslationSearchString['en']['computer-science'])}`,
        }
    ]

    const navFull = 
            <ul className='flex py-4 ml-4 divide-x divide-jmv_light border-b border-jmv_light max-w-fit'>
                {menuLinks.map(link => (
                    <Link 
                        key={link.name}
                        to={link.link}
                        className={twMerge('block xl:text-lg text-md ml-4 pr-4', dark ? "hover:text-jmv_medium text-jmv_dark" : "hover:text-jmv_light text-jmv_white")}
                    >{link.name}</Link>
                ))}
            </ul> 

    return (
        <div className='flex flex-col place-self-start'>
            {more ?
            <>
                <div className='flex sm:hidden'>
                    {/* {navButton} */}
                </div>
                <div className='hidden sm:flex'>
                    {navFull} 
                </div>
            </>
            :
            <>
                <div className='flex lg:hidden'>
                    {/* {navButton} */}
                </div>
                <div className='hidden lg:flex'>
                    {navFull} 
                </div>
            </>
            }
                
        </div>
    )
}