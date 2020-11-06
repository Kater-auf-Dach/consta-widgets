import React from 'react'

import classnames from 'classnames'

import { LinearChart } from '../../..'
import {
  boundaries,
  gridConfigFormat,
  gridConfigLabel,
  gridConfigSimple,
  linesBoundaries,
  linesFormat,
  linesNull,
  linesSimple,
  linesThreshold,
  threshold,
} from '../../data.mock'

import css from './index.css'

export const LinearChartExampleGeneral = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      title="Название графика"
      lines={linesSimple}
      gridConfig={gridConfigSimple}
      isHorizontal
      unit="единицы"
      background="linear-gradient(to right, #f54d4d48, transparent)"
    />
  </div>
)

export const LinearChartExampleFormatLabelTooltip = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      unit="км"
      lines={linesFormat}
      gridConfig={gridConfigFormat}
      isHorizontal
      formatValueForLabel={v => new Date(v).toLocaleDateString()}
      formatValueForTooltip={v => `${v} км`}
      formatValueForTooltipTitle={v => {
        const title = new Date(v)
          .toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
          .replace('г.', '')
        return title[0].toUpperCase() + title.slice(1)
      }}
    />
  </div>
)

export const LinearChartExampleFormatLabelData = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      lines={linesFormat}
      gridConfig={gridConfigFormat}
      isHorizontal
      formatValueForLabel={v => new Date(v).toLocaleDateString()}
    />
  </div>
)

export const LinearChartExampleFormatLabelProcent = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      lines={linesSimple}
      gridConfig={gridConfigSimple}
      isHorizontal
      formatValueForLabel={v => `${v} %`}
    />
  </div>
)

export const LinearChartExampleLabel = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      title="Очень красивый график"
      lines={linesSimple}
      gridConfig={gridConfigLabel}
      isHorizontal
      unit="км"
    />
  </div>
)

export const LinearChartExampleDirectionXtoLeft = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      directionX="toLeft"
      lines={linesSimple}
      gridConfig={gridConfigSimple}
      isHorizontal
    />
  </div>
)

export const LinearChartExampleDirectionXtoRight = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      directionX="toRight"
      lines={linesSimple}
      gridConfig={gridConfigSimple}
      isHorizontal
    />
  </div>
)

export const LinearChartExampleDirectionYtoTop = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      directionY="toTop"
      lines={linesSimple}
      gridConfig={gridConfigSimple}
      isHorizontal
    />
  </div>
)

export const LinearChartExampleDirectionYtoBottom = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      directionY="toBottom"
      lines={linesSimple}
      gridConfig={gridConfigSimple}
      isHorizontal
      unit="км"
    />
  </div>
)

export const LinearChartExampleNull = () => (
  <div className={classnames(css.main)}>
    <LinearChart lines={linesNull} gridConfig={gridConfigSimple} isHorizontal />
  </div>
)

export const LinearChartExampleBoundaries = () => (
  <div className={classnames(css.boundaries)}>
    <LinearChart
      lines={linesBoundaries}
      gridConfig={gridConfigSimple}
      boundaries={boundaries}
      boundariesAxis="y"
      showBoundariesOnAxis
      isHorizontal
    />
  </div>
)

export const LinearChartExampleZoom = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      title="Очень красивый график"
      lines={linesSimple}
      gridConfig={gridConfigSimple}
      isHorizontal
      unit="км"
      withZoom
    />
  </div>
)

export const LinearChartExampleThreshold = () => (
  <div className={classnames(css.threshold)}>
    <LinearChart
      title="График с пороговыми значениями"
      lines={linesThreshold}
      gridConfig={gridConfigSimple}
      threshold={threshold}
      isHorizontal
      unit="тыс. м3"
      formatValueForLabel={v => new Date(v).toLocaleDateString()}
      formatValueForTooltip={v => `${v} тыс м3`}
      formatValueForTooltipTitle={v => {
        const title = new Date(v)
          .toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
          .replace('г.', '')
        return title[0].toUpperCase() + title.slice(1)
      }}
      withZoom
    />
  </div>
)
