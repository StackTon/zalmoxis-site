import Link from 'next/link';
import { ColorThemeSwitch } from "@/components/Header/ColorThemeSwitch";
import { Pages } from '@/components/Header/constants';

const entries = Object.entries(Pages)

export function Header() {
  const linkClassname = "pr-5 hover:text-[var(--foreground)] hover:underline"

  return <header className="flex mt-8 mb-6 ml-6 mr-6">
    <div className="flex-1 underline">
      <Link href="/">Zalmoxis Labs</Link>
    </div>
    <ul className="flex flex-10 justify-center text-[var(--color-gray-1300)]">
      {entries.map(([label, href]) => (
        <li className={linkClassname}><Link href={href}>{label}</Link></li>
      ))}
    </ul>
    <ColorThemeSwitch />
  </header>
}
