import Link from 'next/link'
import { ColorThemeSwitch } from '@/components/Header/ColorThemeSwitch'
import { HEADER_LINKS } from '@/components/Header/constants'

const links = Object.entries(HEADER_LINKS)

export function Header() {
  const linkClassname = 'pr-5 hover:text-[var(--foreground)] hover:underline'

  return (
    <header className='mt-8 mr-6 mb-6 ml-6 flex'>
      <div className='flex-1 underline'>
        <Link href='/'>Zalmoxis Labs</Link>
      </div>
      <ul className='flex flex-10 justify-center text-[var(--color-gray-1300)]'>
        {links.map(([label, href]) => {
          return (
            <li className={linkClassname} key={href}>
              <Link href={href}>{label}</Link>
            </li>
          )
        })}
      </ul>
      <ColorThemeSwitch />
    </header>
  )
}
