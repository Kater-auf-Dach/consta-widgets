import React from 'react'

import classnames from 'classnames'

import { axes, directionsX, directionsY, LinearChart } from '../../..'

import css from './index.css'

export const LinearChartExample = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      title="Очень красивый график"
      lines={[
        {
          values: [
            { x: 1, y: 1 },
            { x: 5, y: 3 },
            { x: 7, y: 1 },
            { x: 8, y: 2 },
          ],
          dots: true,
          lineName: 'Северный бур',
          withGradient: true,
          color: 'var(--color-bg-success)',
        },
      ]}
      gridConfig={{
        x: {
          labels: 'bottom',
          labelTicks: 1,
          gridTicks: 10,
          guide: true,
          withPaddings: false,
        },
        y: {
          labels: 'left',
          labelTicks: 1,
          gridTicks: 4,
          guide: true,
          withPaddings: false,
        },
      }}
      isHorizontal
      units="км"
      background="linear-gradient(to right, #f54d4d48, transparent)"
    />
  </div>
)
