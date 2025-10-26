'use client'

import { useCallback } from 'react'
import { useTheme } from 'next-themes'
import { DarkIcon } from '@/components/Header/ColorThemeSwitch/Icons/DarkIcon'
import { LightIcon } from '@/components/Header/ColorThemeSwitch/Icons/LightIcon'
import { Themes } from '@/components/Header/ColorThemeSwitch/types'

export function ColorThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  const onSwitchTheme = useCallback(
    (theme: Themes) => {
      if (resolvedTheme !== theme) {
        setTheme(theme)
      }
    },
    [resolvedTheme, setTheme],
  )

  const inactiveIconClassNames = 'text-[var(--foreground)] cursor-auto'
  const isLightActive = resolvedTheme === Themes.LIGHT

  return (
    <ul className='flex flex-1 cursor-pointer justify-end text-[var(--color-gray-1300)]'>
      <li
        className={`pr-3 ${isLightActive && inactiveIconClassNames}`}
        onClick={() => onSwitchTheme(Themes.LIGHT)}
      >
        <LightIcon />
      </li>
      <li
        className={!isLightActive ? inactiveIconClassNames : ''}
        onClick={() => onSwitchTheme(Themes.DARK)}
      >
        <DarkIcon />
      </li>
    </ul>
  )
}
