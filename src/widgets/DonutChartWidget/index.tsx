import { Colors, DonutChart } from '@/components/DonutChart'
import { DataMap, DataType } from '@/dashboard/types'
import { createWidget, WidgetContentProps } from '@/utils/WidgetFactory'

const dataType = DataType.Donut
type Data = DataMap[typeof dataType]

export const typeNames = ['heading1', 'heading2', 'heading3', 'text1', 'text2'] as const
export type TypeNames = typeof typeNames[number]

type Params = {
  colors: Colors
}

export const defaultParams: Params = {
  colors: {
    red: '#EB5757',
    yellow: '#F2C94C',
    blue: '#56B9F2',
  },
}

export const DonutChartWidgetContent: React.FC<WidgetContentProps<Data, Params>> = ({
  data,
  params: { colors },
}) => (
  // TODO Нужно сделать растягивание виджетов с графиками по высоте внутри боксов
  // @see https://jira.csssr.io/browse/GINF-50
  <div style={{ minHeight: 200 }}>
    <DonutChart colors={colors} data={data} />
  </div>
)

export const DonutChartWidget = createWidget<Data, Params>({
  name: 'Пончик',
  defaultParams,
  dataType: DataType.Donut,
  Content: DonutChartWidgetContent,
})
