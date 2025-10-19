
export function Header() {

  return <header className="flex mt-8 mb-6 ml-10 mr-10">
    <div className="flex-1">
      Zalmoxis Labs
    </div>
    <ul className="flex flex-10 justify-center">
      <li className="pr-5">Work</li>
      <li className="pr-5">Services</li>
      <li className="pr-5">About</li>
      <li className="pr-5">Resume</li>
      <li>Contact</li>
    </ul>
    <ul className="flex flex-1 justify-end" >
      <li className="pr-5">Light</li>
      <li>Dark</li>
    </ul>
  </header>
}
