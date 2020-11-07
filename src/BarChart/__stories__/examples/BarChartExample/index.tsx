import React from 'react'

import classnames from 'classnames'

import { BarChart } from '../../..'
import { groupExampleData, minimalData, withNegativeValueData } from '../../../data.mock'

import css from './index.css'

export const BarChartExampleGeneral = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={10}
      valuesTicks={1}
      size="s"
      formatValueForTooltip={v => `${v} км`}
      colors={withNegativeValueData.colors}
      groups={withNegativeValueData.groups}
      isHorizontal={true}
      showValues={true}
    />
  </div>
)

export const BarChartExampleSizeS = () => (
  <div className={classnames(css.size)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="s"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
    />
  </div>
)

export const BarChartExampleSizeM = () => (
  <div className={classnames(css.size)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="m"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
    />
  </div>
)

export const BarChartExampleSizeAuto = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
    />
  </div>
)

export const BarChartExampleNotHorizontal = () => (
  <div className={classnames(css.size)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={false}
      showValues={true}
      threshold={minimalData.threshold}
    />
  </div>
)

export const BarChartExampleUnitLeft = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
      unit="тыс. тонн"
      unitPosition="left"
    />
  </div>
)

export const BarChartExampleUnitBottom = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
      unit="тыс. тонн"
      unitPosition="bottom"
    />
  </div>
)

export const BarChartExampleUnitLeftBottom = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
      unit="тыс. тонн"
      unitPosition="left-and-bottom"
    />
  </div>
)

export const BarChartExampleUnitNone = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
      unit="тыс. тонн"
      unitPosition="none"
    />
  </div>
)

export const BarChartExampleThreshold = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="s"
      formatValueForTooltip={v => `${v} км`}
      colors={minimalData.colors}
      groups={minimalData.groups}
      isHorizontal={true}
      showValues={true}
      threshold={minimalData.threshold}
    />
  </div>
)

export const BarChartExampleGroup = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={groupExampleData.colors}
      groups={groupExampleData.groups}
      isHorizontal={true}
      unit="тыс. тонн"
      unitPosition="none"
    />
  </div>
)

export const BarChartExampleGroupSlanted = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={groupExampleData.colors}
      groups={groupExampleData.groups}
      isHorizontal={true}
      unit="тыс. тонн"
      unitPosition="none"
      isXAxisLabelsSlanted
    />
  </div>
)

export const BarChartExampleShowValues = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={1}
      size="auto"
      formatValueForTooltip={v => `${v} км`}
      colors={groupExampleData.colors}
      groups={groupExampleData.groups}
      isHorizontal={true}
      unit="тыс. тонн"
      unitPosition="none"
      showValues={true}
    />
  </div>
)

export const BarChartExampleLableProcent = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={5}
      valuesTicks={2}
      size="auto"
      formatValueForLabel={v => `${v}%`}
      formatValueForTooltip={v => `${v}%`}
      colors={groupExampleData.colors}
      groups={groupExampleData.groups}
      isHorizontal={true}
      unit="тыс. тонн"
      unitPosition="none"
      showValues={true}
    />
  </div>
)

export const BarChartExampleGrid = () => (
  <div className={classnames(css.main)}>
    <BarChart
      gridTicks={10}
      valuesTicks={2}
      size="auto"
      colors={groupExampleData.colors}
      groups={groupExampleData.groups}
      formatValueForTooltip={v => `${v}%`}
      isHorizontal={true}
      unit="тыс. тонн"
      unitPosition="none"
      showValues={true}
    />
  </div>
)
