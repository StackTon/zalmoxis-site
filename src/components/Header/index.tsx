import { ColorThemeSwitch } from "@/components/Header/ColorThemeSwitch";

export function Header() {

  return <header className="flex mt-8 mb-6 ml-6 mr-6">
    <div className="flex-1">
      Zalmoxis Labs
    </div>
    <ul className="flex flex-10 justify-center text-[var(--color-gray-1300)]">
      <li className="pr-5">Work</li>
      <li className="pr-5">Services</li>
      <li className="pr-5">About</li>
      <li className="pr-5">Resume</li>
      <li>Contact</li>
    </ul>
    <ColorThemeSwitch />
  </header>
}
