import { LinearChartWidget } from '@/widgets/LinearChartWidget'

import { Dashboard6, migration6 } from '../'
import { Dashboard5 } from '../../dashboard5'

describe('migration6', () => {
  it('повышает версию', () => {
    const source: Dashboard5.State = {
      version: 5,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            debugName: '1',
            id: '1',
            widgetType: LinearChartWidget.id,
            params: {
              isVertical: true,
            },
          },
          {
            type: 'widget',
            debugName: '2',
            id: '2',
            widgetType: '2',
            params: {},
          },
        ],
        Box2: [
          {
            type: 'columns',
            columns: [
              [
                {
                  type: 'widget',
                  debugName: '3',
                  id: '3',
                  widgetType: LinearChartWidget.id,
                  params: {
                    isVertical: false,
                  },
                },
              ],
            ],
            params: {},
          },
        ],
      },
      settings: {},
    }

    const result: Dashboard6.State = {
      version: 6,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            debugName: '1',
            id: '1',
            widgetType: LinearChartWidget.id,
            params: {
              isHorizontal: false,
            },
          },
          {
            type: 'widget',
            debugName: '2',
            id: '2',
            widgetType: '2',
            params: {},
          },
        ],
        Box2: [
          {
            type: 'columns',
            columns: [
              [
                {
                  type: 'widget',
                  debugName: '3',
                  id: '3',
                  widgetType: LinearChartWidget.id,
                  params: {
                    isHorizontal: true,
                  },
                },
              ],
            ],
            params: {},
          },
        ],
      },
      settings: {},
    }

    expect(migration6.up(source)).toEqual(result)
  })

  it('понижает версию', () => {
    const source: Dashboard6.State = {
      version: 6,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            debugName: '1',
            id: '1',
            widgetType: LinearChartWidget.id,
            params: {
              isHorizontal: true,
            },
          },
          {
            type: 'widget',
            debugName: '2',
            id: '2',
            widgetType: '2',
            params: {},
          },
        ],
        Box2: [
          {
            type: 'columns',
            params: {},
            columns: [
              [
                {
                  type: 'widget',
                  debugName: '3',
                  id: '3',
                  widgetType: LinearChartWidget.id,
                  params: {
                    isHorizontal: false,
                  },
                },
              ],
            ],
          },
        ],
      },
      settings: {},
    }

    const result: Dashboard5.State = {
      version: 5,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            debugName: '1',
            id: '1',
            widgetType: LinearChartWidget.id,
            params: {
              isVertical: false,
            },
          },
          {
            type: 'widget',
            debugName: '2',
            id: '2',
            widgetType: '2',
            params: {},
          },
        ],
        Box2: [
          {
            type: 'columns',
            columns: [
              [
                {
                  type: 'widget',
                  debugName: '3',
                  id: '3',
                  widgetType: LinearChartWidget.id,
                  params: {
                    isVertical: true,
                  },
                },
              ],
            ],
            params: {},
          },
        ],
      },
      settings: {},
    }

    expect(migration6.down(source)).toEqual(result)
  })
})
