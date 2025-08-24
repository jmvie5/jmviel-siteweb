import { twMerge } from 'tailwind-merge'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from '@heroui/react'

interface NavbarProps {
  locale: string
  dark?: boolean
  more?: boolean
  menuLinks: { name: string; url: string }[]
}

export default function NavBar({ menuLinks, dark, more }: NavbarProps) {
  const navButton = (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Button color={'primary'} className={twMerge('ml-4 mt-2 w-32')}>
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Navigation Menu"
        className="z-50 w-60 rounded-xl bg-content2 text-foreground shadow-lg shadow-primary/30"
      >
        {menuLinks.map(link => (
          <DropdownItem key={link.name} className="p-0">
            <Link
              href={link.url}
              className={twMerge(
                'block w-full rounded-lg px-4 py-2 text-sm transition-colors',
                'hover:bg-secondary/20 hover:text-white',
              )}
            >
              {link.name}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )

  const navFull = (
    <ul
      className={twMerge(
        'flex max-w-fit divide-x border-b py-4 ml-4',
        dark
          ? 'divide-content1/40  border-content1/40 '
          : ' divide-foreground/40  border-foreground/40 ',
      )}
    >
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link
            href={link.url}
            className={twMerge(
              'block ml-4 pr-4 whitespace-nowrap transition-colors xl:text-lg text-md',
              dark
                ? 'text-content1 hover:text-content1/80'
                : 'text-foreground hover:text-foreground/80',
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="flex flex-col place-self-start">
      {more ? (
        <>
          <div className="flex sm:hidden">{navButton}</div>
          <div className="hidden sm:flex">{navFull}</div>
        </>
      ) : (
        <>
          <div className="flex lg:hidden">{navButton}</div>
          <div className="hidden lg:flex">{navFull}</div>
        </>
      )}
    </div>
  )
}
