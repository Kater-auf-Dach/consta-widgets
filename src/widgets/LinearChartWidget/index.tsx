import { LinearChart } from '@/components/LinearChart'
import { WidgetSettingsCheckbox } from '@/components/WidgetSettingsCheckbox'
import { WidgetSettingsNumber } from '@/components/WidgetSettingsNumber'
import { WidgetSettingsSelect } from '@/components/WidgetSettingsSelect'
import { WidgetSettingsText } from '@/components/WidgetSettingsText'
import { DataMap, DataType } from '@/dashboard'
import { LinearChartParams as Params, textParams } from '@/dashboard/widget-params'
import { widgetIdsByType } from '@/utils/widgets-list'
import { createWidget, WidgetContentProps } from '@/utils/WidgetFactory'

const dataType = DataType.LinearChart
type Data = DataMap[typeof dataType]

export const defaultParams: Params = {
  direction: 'toRight',
  isHorizontal: true,
  withZoom: false,
  xLabels: 'bottom',
  xLabelTicks: 0,
  xGridTicks: 0,
  xGuide: false,
  xWithPaddings: false,
  yLabels: 'left',
  yLabelTicks: 0,
  yGridTicks: 0,
  yGuide: false,
  yWithPaddings: false,
  titleType: 'text1',
}

export const LinearChartWidgetContent: React.FC<WidgetContentProps<Data, Params>> = ({
  params: {
    direction,
    isHorizontal,
    withZoom,
    xLabels,
    xLabelTicks,
    xGridTicks,
    xGuide,
    xWithPaddings,
    yLabels,
    yLabelTicks,
    yGridTicks,
    yGuide,
    yWithPaddings,
    title,
    titleType,
  },
  data: {
    data,
    colorGroups,
    formatValueForLabel,
    formatValueForTooltip,
    formatValueForTooltipTitle,
    unit,
    threshold,
    onClickHoverLine,
  },
}) => {
  const gridConfig = {
    x: {
      labels: xLabels,
      labelTicks: xLabelTicks,
      gridTicks: xGridTicks,
      guide: xGuide,
      withPaddings: xWithPaddings,
    },
    y: {
      labels: yLabels,
      labelTicks: yLabelTicks,
      gridTicks: yGridTicks,
      guide: yGuide,
      withPaddings: yWithPaddings,
    },
  }

  const titleData =
    title && titleType
      ? {
          text: title,
          type: titleType,
        }
      : undefined

  return (
    <LinearChart
      gridConfig={gridConfig}
      lines={data}
      colorGroups={colorGroups}
      withZoom={withZoom}
      direction={direction}
      isHorizontal={Boolean(isHorizontal)}
      formatValueForLabel={formatValueForLabel ? formatValueForLabel : String}
      formatValueForTooltip={formatValueForTooltip}
      formatValueForTooltipTitle={formatValueForTooltipTitle}
      unit={unit}
      threshold={threshold}
      titleData={titleData}
      onClickHoverLine={onClickHoverLine}
    />
  )
}

export const LinearChartWidget = createWidget<Data, Params>({
  id: widgetIdsByType.LinearChartWidget,
  name: 'Линейный график',
  defaultParams: {
    ...defaultParams,
    growRatio: 1,
  },
  dataType: DataType.LinearChart,
  Content: LinearChartWidgetContent,
  renderSettings(params, onChangeParams) {
    return (
      <>
        <WidgetSettingsText
          name="Заголовок"
          value={params.title}
          onChange={value => onChangeParams({ title: value })}
        />
        {params.title && (
          <WidgetSettingsSelect
            name="Тип заголовка"
            value={params.titleType}
            values={textParams.typeNames.map(type => ({ value: type, name: type }))}
            onChange={value => onChangeParams({ titleType: value })}
          />
        )}
        <WidgetSettingsCheckbox
          name="Горизонтальное отображение"
          value={params.isHorizontal}
          onChange={value => onChangeParams({ isHorizontal: value })}
        />
        {!params.isHorizontal && (
          <WidgetSettingsSelect
            name="Направление графика"
            value={params.direction}
            onChange={value => onChangeParams({ direction: value })}
            values={[
              {
                name: 'Вправо',
                value: 'toRight',
              },
              {
                name: 'Влево',
                value: 'toLeft',
              },
            ]}
          />
        )}
        <WidgetSettingsCheckbox
          name="Зум"
          value={params.withZoom}
          onChange={value => onChangeParams({ withZoom: value })}
        />

        <p>Настройка оси Х</p>
        <WidgetSettingsSelect
          name="Расположение оси"
          value={params.xLabels}
          onChange={value => onChangeParams({ xLabels: value })}
          values={[
            {
              name: 'Сверху',
              value: 'top',
            },
            {
              name: 'Снизу',
              value: 'bottom',
            },
          ]}
        />
        <WidgetSettingsNumber
          name="Частота обновления подписей"
          value={params.xLabelTicks}
          onChange={value => onChangeParams({ xLabelTicks: value })}
        />
        <WidgetSettingsNumber
          name="Частота обновления линий"
          value={params.xGridTicks}
          onChange={value => onChangeParams({ xGridTicks: value })}
        />
        <WidgetSettingsCheckbox
          name="Отображать отступы на оси"
          value={params.xWithPaddings}
          onChange={value => onChangeParams({ xWithPaddings: value })}
        />
        <WidgetSettingsCheckbox
          name="Отображать нулевую ось"
          value={params.xGuide}
          onChange={value => onChangeParams({ xGuide: value })}
        />

        <p>Настройка оси Y</p>
        <WidgetSettingsSelect
          name="Расположение оси"
          value={params.yLabels}
          onChange={value => onChangeParams({ yLabels: value })}
          values={[
            {
              name: 'Слева',
              value: 'left',
            },
            {
              name: 'Справа',
              value: 'right',
            },
          ]}
        />
        <WidgetSettingsNumber
          name="Частота обновления подписей"
          value={params.yLabelTicks}
          onChange={value => onChangeParams({ yLabelTicks: value })}
        />
        <WidgetSettingsNumber
          name="Частота обновления линий"
          value={params.yGridTicks}
          onChange={value => onChangeParams({ yGridTicks: value })}
        />
        <WidgetSettingsCheckbox
          name="Отображать отступы на оси"
          value={params.yWithPaddings}
          onChange={value => onChangeParams({ yWithPaddings: value })}
        />
        <WidgetSettingsCheckbox
          name="Отображать нулевую ось"
          value={params.yGuide}
          onChange={value => onChangeParams({ yGuide: value })}
        />
      </>
    )
  },
})
