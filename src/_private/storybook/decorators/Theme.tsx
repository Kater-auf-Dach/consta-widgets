import React from 'react'

import { presetGpnDark, presetGpnDefault, presetGpnDisplay, Theme } from '@gpn-design/uikit/Theme'

import { presetGpnScaling } from '@/theme'

type ThemeName = 'gpnDefault' | 'gpnDark' | 'gpnDisplay'
type Theme = {
  name: ThemeName
  default?: boolean
  color: string
}
type Props = {
  themeName: ThemeName
}

const getTheme = (themeName?: ThemeName) => {
  switch (themeName) {
    case 'gpnDefault':
      return presetGpnDefault
    case 'gpnDisplay':
      return presetGpnDisplay
    case 'gpnDark':
      return presetGpnDark
  }

  return presetGpnDisplay
}

export const listOfThemes: readonly Theme[] = [
  {
    name: 'gpnDefault',
    color: '#fff',
  },
  {
    name: 'gpnDark',
    color: '#22272b',
  },
  {
    name: 'gpnDisplay',
    default: true,
    color: '#002033',
  },
]

export const ThemeDecorator: React.FC<Props> = ({ children, themeName }) => {
  return (
    <Theme
      className="Theme_gpnScaling"
      preset={{
        ...getTheme(themeName),
        ...presetGpnScaling,
      }}
      style={{ background: 'var(--color-bg-default)' }}
    >
      {children}
    </Theme>
  )
}
