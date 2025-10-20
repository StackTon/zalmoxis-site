import Link from 'next/link';
import { ColorThemeSwitch } from "@/components/Header/ColorThemeSwitch";

export function Header() {

  return <header className="flex mt-8 mb-6 ml-6 mr-6">
    <div className="flex-1">
      <Link href="/">Zalmoxis Labs</Link>
    </div>
    <ul className="flex flex-10 justify-center text-[var(--color-gray-1300)]">
      <li className="pr-5"><Link href="/work">Work</Link></li>
      <li className="pr-5"><Link href="/services">Services</Link></li>
      <li className="pr-5"><Link href="/about">About</Link></li>
      <li className="pr-5"><Link href="/resume">Resume</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
    <ColorThemeSwitch />
  </header>
}
