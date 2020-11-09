import React from 'react'

import classnames from 'classnames'

import { BackgroundBarChart } from '../../..'
import {
  exampleData,
  groupsAnanasExample,
  groupsExample,
  groupsPotatoExample,
} from '../../../data.mock'

import css from './index.css'

export const BackgroundBarChartExample = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsExample}
      gridTicks={4}
      valuesTicks={1}
      isHorizontal={true}
      showValues={false}
      align="start"
      threshold={exampleData.threshold}
    />
  </div>
)

export const BackgroundBarChartPotatoExample = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={4}
      valuesTicks={1}
      isHorizontal={true}
      showValues={false}
      align="start"
    />
  </div>
)

export const BackgroundBarChartAnanasExample = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsAnanasExample}
      gridTicks={4}
      valuesTicks={1}
      isHorizontal={true}
      showValues={false}
      align="start"
    />
  </div>
)

export const BackgroundBarFormatValueForLabel = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={4}
      valuesTicks={1}
      isHorizontal={true}
      showValues={false}
      align="start"
      formatValueForLabel={v => `${v} кг`}
    />
  </div>
)

export const BackgroundBarChartShowValues = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={4}
      valuesTicks={1}
      isHorizontal={true}
      showValues={true}
      align="start"
    />
  </div>
)

export const BackgroundBarChartExampleTooltip = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={4}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
      formatValueForLabel={v => `${v} кг`}
      formatValueForTooltip={v => `${v} дыщ`}
    />
  </div>
)

export const BackgroundBarChartExampleTicks = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={10}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
    />
  </div>
)

export const BackgroundBarChartExampleTicks2 = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={4}
      valuesTicks={2}
      isHorizontal={true}
      align="start"
    />
  </div>
)

export const BackgroundBarChartExampleThreshold = () => (
  <div className={classnames(css.main)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={10}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
      threshold={exampleData.threshold}
    />
  </div>
)

export const BackgroundBarChartExampleStart = () => (
  <div className={classnames(css.small)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={5}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
    />
  </div>
)

export const BackgroundBarChartExampleEnd = () => (
  <div className={classnames(css.small)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={5}
      valuesTicks={1}
      isHorizontal={true}
      align="end"
    />
  </div>
)

export const BackgroundBarChartExampleVertical = () => (
  <div className={classnames(css.small)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={5}
      valuesTicks={1}
      isHorizontal={false}
      align="start"
    />
  </div>
)

export const BackgroundBarChartExampleUnitLeft = () => (
  <div className={classnames(css.small)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={5}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
      unit="кг"
      unitPosition="left"
    />
  </div>
)

export const BackgroundBarChartExampleUnitNone = () => (
  <div className={classnames(css.small)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={5}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
      unit="кг"
      unitPosition="none"
    />
  </div>
)

export const BackgroundBarChartExampleUnitLeftBottom = () => (
  <div className={classnames(css.small)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={5}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
      unit="кг"
      unitPosition="left-and-bottom"
    />
  </div>
)

export const BackgroundBarChartExampleUnitBottom = () => (
  <div className={classnames(css.small)}>
    <BackgroundBarChart
      groups={groupsPotatoExample}
      gridTicks={5}
      valuesTicks={1}
      isHorizontal={true}
      align="start"
      unit="кг"
      unitPosition="bottom"
    />
  </div>
)
