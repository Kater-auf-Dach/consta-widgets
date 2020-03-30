import React from 'react'

import { Image } from '@/components/Image'
import { DataMap, DataType } from '@/dashboard/types'
import { widgetIdsByType } from '@/utils/widgets-list'
import { createWidget, WidgetContentProps } from '@/utils/WidgetFactory'

const dataType = DataType.Image
type Data = DataMap[typeof dataType]

type Params = {}

export const defaultParams: Params = {}

export const ImageWidgetContent: React.FC<WidgetContentProps<Data, Params>> = ({ data }) => {
  return <Image src={data} />
}

export const ImageWidget = createWidget<Data, Params>({
  id: widgetIdsByType.ImageWidget,
  name: 'Картинка',
  dataType,
  defaultParams: {
    ...defaultParams,
    growRatio: 1,
  },
  Content: ImageWidgetContent,
})