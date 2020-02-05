import { Tooltip } from '@/components/Tooltip'
import { WidgetSettingsCheckbox } from '@/components/WidgetSettingsCheckbox'
import { WidgetSettingsNumber } from '@/components/WidgetSettingsNumber'
import { WidgetSettingsSelect } from '@/components/WidgetSettingsSelect'
import { WidgetSettingsText } from '@/components/WidgetSettingsText'
import { DataMap, DataType } from '@/dashboard/types'
import { StyleProps, Text } from '@/ui/Text'
import { createWidget, WidgetContentProps } from '@/utils/WidgetFactory'

import { ReactComponent as IconSettings } from './icons/settings.svg'
import css from './index.css'

const dataType = DataType.Text
type Data = DataMap[typeof dataType] | typeof undefined

export const widgetId = 'b69b03e4-7fb6-4ac2-bdfa-e6c7fecdcca5'

export const typeNames = [
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'text1',
  'text2',
  'text3',
] as const
export type TypeNames = typeof typeNames[number]

type Params = {
  text: string
  type: TypeNames
  croppedLineCount?: number
  croppedWithGradient?: boolean
}

type TextType = {
  [key in TypeNames]: {
    text: string
    props: StyleProps
  }
}

const textType: TextType = {
  heading1: {
    text: 'Заголовок 1',
    props: {
      size: '3xl',
      bold: true,
    },
  },
  heading2: {
    text: 'Заголовок 2',
    props: {
      size: 'xl',
      bold: true,
    },
  },
  heading3: {
    text: 'Заголовок 3',
    props: {
      size: 'l',
      bold: true,
    },
  },
  heading4: {
    text: 'Заголовок 4',
    props: {
      size: 's',
      bold: true,
      uppercase: true,
    },
  },
  text1: {
    text: 'Текст 1',
    props: {
      size: 's',
    },
  },
  text2: {
    text: 'Текст 2',
    props: {
      size: 'xs',
      secondary: true,
    },
  },
  text3: {
    text: 'Текст 3',
    props: {
      size: 'xs',
      secondary: true,
      bold: true,
    },
  },
}

export const defaultParams: Params = { text: 'Заголовок', type: 'text1' }

export const TextWidgetContent: React.FC<WidgetContentProps<Data, Params>> = ({
  data,
  params: { text, type, croppedLineCount, croppedWithGradient },
}) => {
  const ref = React.useRef<HTMLButtonElement>(null)

  const [tooltipVisible, setTooltipVisibility] = React.useState(false)
  const [tooltipPosition, setTooltipPosition] = React.useState<
    { x: number; y: number } | undefined
  >()

  const onToggleClick = () => {
    if (data && data.onClick) {
      return data.onClick()
    }

    setTooltipVisibility(!tooltipVisible)
  }

  React.useEffect(() => {
    if (!ref.current) {
      return
    }

    const { top, left, width, height } = ref.current.getBoundingClientRect()

    const x = left + width / 2
    const y = top + height

    if (tooltipPosition && tooltipPosition.x === x && tooltipPosition.y === y) {
      return
    }

    setTooltipPosition({ x, y })
  }, [ref, tooltipVisible, tooltipPosition, setTooltipPosition])

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node

    if (target !== ref.current) {
      setTooltipVisibility(false)
    }
  }

  return (
    <div className={css.text}>
      <Text
        {...textType[type].props}
        croppedLineCount={croppedLineCount}
        croppedWithGradient={croppedWithGradient}
        className={css.content}
      >
        {data && data.text ? data.text : text}
      </Text>
      {data && (data.tooltip || data.onClick) && (
        <div className={css.toggleable}>
          <button ref={ref} className={css.button} onClick={onToggleClick}>
            <IconSettings />
          </button>
          {tooltipPosition && (
            <Tooltip
              className={css.tooltip}
              isVisible={tooltipVisible}
              direction="bottom"
              x={tooltipPosition.x}
              y={tooltipPosition.y}
              onClickOutside={handleClickOutside}
            >
              {data.tooltip}
            </Tooltip>
          )}
        </div>
      )}
    </div>
  )
}

export const TextWidget = createWidget<Data, Params>({
  id: widgetId,
  name: 'Текст',
  defaultParams,
  dataType,
  Content: TextWidgetContent,
  allowEmptyData: true,
  renderSettings(params, onChangeParam) {
    return (
      <>
        <WidgetSettingsText
          name="Текст"
          value={params.text}
          onChange={value => onChangeParam('text', value)}
        />
        <WidgetSettingsSelect
          name="Тип"
          value={params.type}
          onChange={value => onChangeParam('type', value)}
          values={typeNames.map(i => ({ value: i, name: i }))}
        />
        <WidgetSettingsNumber
          name="После какой строки обрезать текст"
          value={params.croppedLineCount}
          onChange={value => onChangeParam('croppedLineCount', value)}
        />
        <WidgetSettingsCheckbox
          name="Закрашивать градиентом обрезаемую строку"
          value={params.croppedWithGradient}
          onChange={value => onChangeParam('croppedWithGradient', value)}
        />
      </>
    )
  },
})
