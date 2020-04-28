import * as React from 'react'

import { ProgressBar } from '@/components/ProgressBar'
import { WidgetSettingsCheckbox } from '@/components/WidgetSettingsCheckbox'
import { WidgetSettingsSelect } from '@/components/WidgetSettingsSelect'
import { DataMap, DataType } from '@/dashboard'
import { progressBarParams, ProgressBarParams as Params } from '@/dashboard/widget-params'
import { widgetIdsByType } from '@/utils/widgets-list'
import { createWidget, WidgetContentProps } from '@/utils/WidgetFactory'

const dataType = DataType.ProgressBar
type Data = DataMap[typeof dataType]

export const defaultParams: Params = {
  size: 'm',
  isCaptionBold: false,
}

export const ProgressBarWidgetContent: React.FC<WidgetContentProps<Data, Params>> = ({
  data,
  params: { size, isCaptionBold },
}) => {
  return <ProgressBar size={size} isCaptionBold={isCaptionBold} {...data} />
}

export const ProgressBarWidget = createWidget<Data, Params>({
  id: widgetIdsByType.ProgressBarWidget,
  name: 'Прогресс-бар ("градусник")',
  defaultParams,
  dataType,
  Content: ProgressBarWidgetContent,
  renderSettings(params, onChangeParams) {
    return (
      <>
        <WidgetSettingsSelect
          name="Размер"
          value={params.size}
          onChange={value => onChangeParams({ size: value })}
          values={progressBarParams.sizes.map(i => ({ name: i, value: i }))}
        />
        <WidgetSettingsCheckbox
          name="Заголовок жирный"
          value={params.isCaptionBold}
          onChange={value => onChangeParams({ isCaptionBold: value })}
        />
      </>
    )
  },
})
