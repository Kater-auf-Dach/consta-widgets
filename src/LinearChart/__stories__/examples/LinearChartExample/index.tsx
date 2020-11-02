import React from 'react'

import classnames from 'classnames'

import { BackgroundBarChart } from '../../..'
import { groups } from '../../../data.mock'

import css from './index.css'

export const LinearChartExample = () => (
  <div className={classnames(css.main)}>
    <LinearChart
      groups={groups}
      gridTicks={4}
      valuesTicks={1}
      isHorizontal={true}
      showValues={false}
      align="start"
    />
  </div>
)
