import React from 'react'

import { subtractTime } from '@gaz/utils/lib/time'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import { blockCenteringDecorator } from '@/utils/Storybook'

import { Notices } from '.'

const notices = [
  {
    description: 'Время операции превышено. Давление б/р в красном корридоре.',
    startTime: new Date().getTime(),
    title: 'Вероятность прихвата 90%',
  },
  {
    description: 'Время операции превышено. Давление б/р в желтом корридоре.',
    startTime: subtractTime(new Date(), 0, 0, 3).getTime(),
    title: 'Вероятность прихвата 60%',
  },
] as const

storiesOf('legacy/Notices', module)
  .addDecorator(withSmartKnobs())
  .addDecorator(blockCenteringDecorator())
  .add('single notice', () => {
    return <Notices notices={[notices[0]]} />
  })
  .add('multiple notices', () => {
    return <Notices notices={notices} />
  })
