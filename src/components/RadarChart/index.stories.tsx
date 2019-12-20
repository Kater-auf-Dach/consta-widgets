import React from 'react'

import { boolean, object, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import { blockCenteringDecorator } from '@/utils/Storybook'

import { Figure, RadarChart } from './'

const getColorGroups = () => {
  return object('colorGroups', {
    mainCharacter: '#20B55F',
    partyMember: '#56B9F2',
  })
}

const axesLabels = {
  strength: 'Сила сила сила сила сила сила сила сила сила сила сила сила сила',
  endurance: 'Выносливая выносливость',
  charisma: 'Харизма',
  intelligence: 'Гиперинтеллектуальный интеллект',
  agility: 'Ловкость',
}

const figures: readonly Figure[] = [
  {
    colorGroupName: 'mainCharacter',
    name: 'Северный бур',
    values: [
      { axisName: 'strength', value: 10 },
      { axisName: 'endurance', value: 9 },
      { axisName: 'charisma', value: 2 },
      { axisName: 'intelligence', value: 1 },
      { axisName: 'agility', value: 3 },
    ],
  },
  {
    colorGroupName: 'partyMember',
    name: 'Южное месторождение',
    values: [
      { axisName: 'strength', value: 2 },
      { axisName: 'endurance', value: 4 },
      { axisName: 'charisma', value: 8 },
      { axisName: 'intelligence', value: 9 },
      { axisName: 'agility', value: 2 },
    ],
  },
]

const getFormatterValueForLabel = () => {
  const unit = text('format label unit', '')
  const useFormatPercents = boolean('format label as percents', false)

  if (useFormatPercents) {
    return (v: number) => `${Math.round(v)}%`
  }

  if (unit) {
    return (v: number) => `${v}${unit}`
  }

  return undefined
}

const getFormatterValueForTooltip = () => {
  const unit = text('format tooltip label unit', ' тыс м3')
  const isActive = boolean('format tooltip label active', false)

  return isActive ? (v: number) => `${v}${unit}` : undefined
}

storiesOf('components/RadarChart', module)
  .addDecorator(withSmartKnobs())
  .addDecorator(blockCenteringDecorator({ width: '50vw', height: '60vh' }))
  .add('with tooltips', () => (
    <RadarChart
      colorGroups={getColorGroups()}
      axesLabels={axesLabels}
      maxValue={10}
      figures={figures}
      ticks={4}
      backgroundColor="var(--bg-color)"
      formatValueForLabel={getFormatterValueForLabel()}
      formatValueForTooltip={getFormatterValueForTooltip()}
      withConcentricColor={false}
      labelSize="s"
    />
  ))
  .add('with hints', () => (
    <RadarChart
      colorGroups={getColorGroups()}
      axesLabels={axesLabels}
      maxValue={10}
      figures={figures.slice(0, 1)}
      ticks={4}
      backgroundColor="var(--bg-color)"
      formatValueForLabel={getFormatterValueForLabel()}
      withConcentricColor={false}
      labelSize="s"
    />
  ))
