import { SOCIAL_LINKS } from '@/components/Footer/constatns'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='fixed right-0 bottom-0 left-0 flex flex-col items-center justify-center gap-3 px-6 py-4'>
      <div className='flex items-center justify-center gap-4'>
        {SOCIAL_LINKS.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={label}
            className='transition-transform hover:scale-110'
          >
            {icon}
          </a>
        ))}
      </div>
      <p className='text-center text-sm'>Copyright © {year} Zalmoxis Labs</p>
    </footer>
  )
}
