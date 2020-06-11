import { Text } from '@gpn-design/uikit/Text'
import classnames from 'classnames'

import { TextAlign } from '../../'

import css from './index.css'

type Props = {
  children: React.ReactNode
  tag: React.ElementType
  align?: TextAlign
  className?: string
  type?: 'default' | 'header' | 'period'
}

const presets = {
  default: {
    size: 'm',
  },
  header: {
    size: 'xs',
    spacing: 'xs',
    transform: 'uppercase',
    weight: 'bold',
  },
  period: {
    lineHeight: 's',
    spacing: 'xs',
  },
} as const

export const RoadmapText: React.FC<Props> = ({
  children,
  tag,
  align = 'left',
  className,
  type = 'default',
}) => {
  const preset = presets[type]
  return (
    <Text as={tag} className={classnames(css[align], className)} view="primary" {...preset}>
      {children}
    </Text>
  )
}
