import { widgetId as textWidgetId } from '@/widgets/TextWidget'

// Чтобы тесты не падали на require.context
jest.mock('@/utils/widgets-list', () => ({}))

import { DashboardState, getAllWidgets } from '../'

const createTextWidget = (name: string, params = {}) =>
  ({
    type: 'widget',
    debugName: name,
    id: name,
    widgetType: textWidgetId,
    params,
  } as const)

describe('getAllWidgets', () => {
  it('возвращает список всех виджетов дашборда', () => {
    const config: DashboardState['config'] = {
      Box0: [createTextWidget('1')],
      Box2: [
        {
          type: 'grid',
          grid: {
            columnParams: [{ growRatio: 11 }, { growRatio: 22 }],
            rowParams: [{}],
            items: [
              // Строка 1
              [
                // Колонка 1
                [createTextWidget('1.1a'), createTextWidget('1.1b')],
                // Колонка 2
                [createTextWidget('1.2')],
              ],
              // Строка 2
              [
                // Колонка 1
                [createTextWidget('2.1')],
                // Колонка 2
                [],
              ],
            ],
          },
          params: {
            growRatio: 1,
          },
        },
      ],
      Box4: [
        {
          type: 'grid',
          grid: {
            columnParams: [{}],
            rowParams: [{}],
            items: [
              // Строка 1
              [
                // Колонка 1
                [createTextWidget('4.1a'), createTextWidget('4.1b')],
                // Колонка 2
                [createTextWidget('4.2')],
              ],
              // Строка 2
              [
                // Колонка 1
                [
                  {
                    type: 'switch',
                    id: 'switchId',
                    displays: [[createTextWidget('4.3')], [createTextWidget('4.4')]],
                    params: {},
                  },
                ],
                // Колонка 2
                [],
              ],
            ],
          },
          params: {},
        },
      ],
    }

    expect(getAllWidgets(config)).toEqual([
      createTextWidget('1'),
      createTextWidget('1.1a'),
      createTextWidget('1.1b'),
      createTextWidget('1.2'),
      createTextWidget('2.1'),
      createTextWidget('4.1a'),
      createTextWidget('4.1b'),
      createTextWidget('4.2'),
      createTextWidget('4.3'),
      createTextWidget('4.4'),
    ])
  })
})