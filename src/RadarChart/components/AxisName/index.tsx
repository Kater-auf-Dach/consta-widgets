import * as React from 'react'

import { Text } from '@consta/uikit/Text'

import css from './index.css'

type Props = {
  xPercent: number
  yPercent: number
  label: string
  width: number
  lineHeight: number
  offset: number
  fontSize: number
}

export const getTransform = (xPercent: number, yPercent: number, offset: number): string =>
  [
    `translateX(${xPercent <= 50 ? -100 : 0}%)`,
    `translateX(${((xPercent - 50) / 50) * offset}px)`,
    `translateY(${yPercent <= 50 ? -100 : 0}%)`,
    `translateY(${((yPercent - 50) / 50) * offset}px)`,
  ].join(' ')

export const RadarChartAxisName: React.FC<Props> = ({
  xPercent,
  yPercent,
  label,
  offset,
  width,
  lineHeight,
  fontSize,
}) => {
  return (
    <Text
      as="div"
      view="secondary"
      className={css.axisName}
      style={{
        top: `${yPercent}%`,
        left: `${xPercent}%`,
        transform: getTransform(xPercent, yPercent, offset),
        textAlign: xPercent <= 50 ? 'right' : 'left',
        width,
        lineHeight: `${lineHeight}px`,
        fontSize: `${fontSize}px`,
      }}
    >
      {label}
    </Text>
  )
}
