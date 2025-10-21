import Link from 'next/link';
import { ColorThemeSwitch } from "@/components/Header/ColorThemeSwitch";

export function Header() {
  const linkClassname = "pr-5 hover:text-[var(--foreground)] hover:underline"

  return <header className="flex mt-8 mb-6 ml-6 mr-6">
    <div className="flex-1 underline">
      <Link href="/">Zalmoxis Labs</Link>
    </div>
    <ul className="flex flex-10 justify-center text-[var(--color-gray-1300)]">
      <li className={linkClassname}><Link href="/work">Work</Link></li>
      <li className={linkClassname}><Link href="/services">Services</Link></li>
      <li className={linkClassname}><Link href="/about">About</Link></li>
      <li className={linkClassname}><Link href="/resume">Resume</Link></li>
      <li className={linkClassname}><Link href="/contact">Contact</Link></li>
    </ul>
    <ColorThemeSwitch />
  </header>
}
