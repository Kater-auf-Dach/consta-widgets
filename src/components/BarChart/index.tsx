import React, { useRef, useState } from 'react'
import { useUID } from 'react-uid'

import useComponentSize from '@rehooks/component-size'
import * as d3 from 'd3'
import { isEqual } from 'lodash'

import { ColorGroups } from '@/dashboard/types'

import { Axis } from './components/Axis'
import { Bar } from './components/Bar'
import css from './index.css'

type NumberRange = readonly [number, number]

export type Orientation = 'horizontal' | 'vertical'

export type Data = {
  label: string
  values: ReadonlyArray<{
    colorGroupName: string
    value: number | undefined
  }>
}

type Props = {
  data: readonly Data[]
  colorGroups: ColorGroups
  orientation: Orientation
  /** Показывать значение рядом с линиями. Работает только при orientation: horizontal */
  showValues?: boolean
  valuesTick?: number
}

const getXRange = (width: number, orientation: Orientation): NumberRange =>
  orientation === 'horizontal' ? [-1, width] : [0, width]
const getYRange = (height: number, orientation: Orientation): NumberRange =>
  orientation === 'horizontal' ? [0, height] : [height, 0]

export const getGroupScale = (domain: readonly string[], size: number, orientation: Orientation) =>
  d3
    .scaleBand()
    .domain([...domain])
    .range(
      orientation === 'horizontal'
        ? [getYRange(size, orientation)[0], getYRange(size, orientation)[1]]
        : [getXRange(size, orientation)[0], getXRange(size, orientation)[1]]
    )

export const getValuesScale = (domain: NumberRange, size: number, orientation: Orientation) =>
  d3
    .scaleLinear()
    .domain([...domain])
    .range(
      orientation === 'horizontal' ? getXRange(size, orientation) : getYRange(size, orientation)
    )

const getDomain = (items: readonly Data[]): NumberRange => {
  // tslint:disable-next-line:readonly-array
  const numbers = items.reduce<number[]>((acc, curr) => {
    acc.push(...curr.values.map(i => i.value).filter((v): v is number => v !== undefined))
    return acc
  }, [])

  return [0, d3.max(numbers)] as NumberRange
}

export const BarChart: React.FC<Props> = ({
  data = [],
  orientation,
  colorGroups,
  showValues,
  valuesTick = 4,
}) => {
  const ref = useRef(null)
  const { width, height } = useComponentSize(ref)
  const [{ paddingX, paddingY }, changePadding] = useState({ paddingX: 0, paddingY: 0 })
  const clipId = `barchart_clipPath_${useUID()}`

  const onAxisSizeChange = ({
    xAxisHeight,
    yAxisWidth,
  }: {
    xAxisHeight: number
    yAxisWidth: number
  }) => {
    const newPaddings = {
      paddingX: yAxisWidth,
      paddingY: xAxisHeight,
    }

    if (!isEqual({ paddingX, paddingY }, newPaddings)) {
      changePadding(newPaddings)
    }
  }

  const svgWidth = width ? Math.round(width - paddingX) : 0
  const svgHeight = height ? Math.round(height - paddingY) : 0

  const groupDomains = data.map(item => item.label)
  const valuesDomains = getDomain(data)

  const groupScale = getGroupScale(
    groupDomains,
    orientation === 'horizontal' ? svgHeight : svgWidth,
    orientation
  )
  const valuesScale = getValuesScale(
    valuesDomains,
    orientation === 'horizontal' ? svgWidth : svgHeight,
    orientation
  )

  return (
    <div
      ref={ref}
      className={css.main}
      style={{
        paddingLeft: paddingX,
      }}
    >
      <svg className={css.svg} width={svgWidth} height={svgHeight}>
        <defs>
          <clipPath id={clipId}>
            <rect width={svgWidth} height={svgHeight} />
          </clipPath>
        </defs>
        <Axis
          width={svgWidth}
          height={svgHeight}
          groupScale={groupScale}
          valuesScale={valuesScale}
          valuesTick={valuesTick}
          orientation={orientation}
          onAxisSizeChange={onAxisSizeChange}
        />
        {data.map(item => (
          <Bar
            key={item.label}
            orientation={orientation}
            data={item}
            groupScale={groupScale}
            valuesScale={valuesScale}
            colorGroups={colorGroups}
            clipId={clipId}
            showValues={showValues}
          />
        ))}
      </svg>
    </div>
  )
}
