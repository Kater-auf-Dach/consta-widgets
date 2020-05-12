import { Dashboard13, migration13, widgetIdsByType as Dashboard13WidgetIdsByType } from '../'
import { Dashboard12, widgetIdsByType as Dashboard12WidgetIdsByType } from '../../dashboard12'

describe('migration13', () => {
  it('повышает версию', () => {
    const source: Dashboard12.State = {
      version: 12,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            widgetType: Dashboard12WidgetIdsByType.TrafficLightWidget,
            id: 'traffic_light_1',
            debugName: 'traffic_light_1',
            params: {
              datasetId: 'traffic_light_dataset_1',
              growRatio: 100,
              marginTop: 'xs',
              type: 'default',
              size: 'm',
            },
          },
        ],
        Box1: [
          {
            type: 'switch',
            id: 'switch',
            displays: [
              [
                {
                  type: 'widget',
                  widgetType: Dashboard12WidgetIdsByType.TrafficLightWidget,
                  id: 'traffic_light_2',
                  debugName: 'traffic_light_2',
                  params: {
                    datasetId: 'traffic_light_dataset_2',
                    type: 'default',
                  },
                },
              ],
            ],
            params: {},
          },
        ],
        Box2: [
          {
            type: 'grid',
            grid: {
              columnParams: [],
              rowParams: [],
              items: [
                [
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard12WidgetIdsByType.TrafficLightWidget,
                      id: 'traffic_light_3',
                      debugName: 'traffic_light_3',
                      params: {
                        datasetId: 'traffic_light_dataset_3',
                        type: 'text',
                      },
                    },
                  ],
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard12WidgetIdsByType.ImageWidget,
                      id: 'image',
                      debugName: 'image',
                      params: {
                        growRatio: 222,
                      },
                    },
                  ],
                ],
              ],
            },
            params: {},
          },
        ],
      },
      settings: {},
    }

    const result: Dashboard13.State = {
      version: 13,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            widgetType: Dashboard13WidgetIdsByType.BadgeWidget,
            id: 'traffic_light_1',
            debugName: 'traffic_light_1',
            params: {
              datasetId: 'traffic_light_dataset_1',
              growRatio: 100,
              marginTop: 'xs',
              view: 'filled',
              size: 'm',
              isMinified: true,
            },
          },
        ],
        Box1: [
          {
            type: 'switch',
            id: 'switch',
            displays: [
              [
                {
                  type: 'widget',
                  widgetType: Dashboard13WidgetIdsByType.BadgeWidget,
                  id: 'traffic_light_2',
                  debugName: 'traffic_light_2',
                  params: {
                    datasetId: 'traffic_light_dataset_2',
                    view: 'filled',
                    size: 's',
                    isMinified: true,
                  },
                },
              ],
            ],
            params: {},
          },
        ],
        Box2: [
          {
            type: 'grid',
            grid: {
              columnParams: [],
              rowParams: [],
              items: [
                [
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard13WidgetIdsByType.BadgeWidget,
                      id: 'traffic_light_3',
                      debugName: 'traffic_light_3',
                      params: {
                        datasetId: 'traffic_light_dataset_3',
                        view: 'filled',
                        size: 's',
                        isMinified: false,
                      },
                    },
                  ],
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard13WidgetIdsByType.ImageWidget,
                      id: 'image',
                      debugName: 'image',
                      params: {
                        growRatio: 222,
                      },
                    },
                  ],
                ],
              ],
            },
            params: {},
          },
        ],
      },
      settings: {},
    }

    expect(migration13.up(source)).toEqual(result)
  })

  it('понижает версию', () => {
    const source: Dashboard13.State = {
      version: 13,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            widgetType: Dashboard13WidgetIdsByType.BadgeWidget,
            id: 'traffic_light_1',
            debugName: 'traffic_light_1',
            params: {
              datasetId: 'traffic_light_dataset_1',
              growRatio: 100,
              marginTop: 'xs',
              view: 'filled',
              size: 'm',
              isMinified: true,
            },
          },
        ],
        Box1: [
          {
            type: 'switch',
            id: 'switch',
            displays: [
              [
                {
                  type: 'widget',
                  widgetType: Dashboard13WidgetIdsByType.BadgeWidget,
                  id: 'traffic_light_2',
                  debugName: 'traffic_light_2',
                  params: {
                    datasetId: 'traffic_light_dataset_2',
                    view: 'filled',
                    size: 's',
                  },
                },
              ],
            ],
            params: {},
          },
        ],
        Box2: [
          {
            type: 'grid',
            grid: {
              columnParams: [],
              rowParams: [],
              items: [
                [
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard13WidgetIdsByType.BadgeWidget,
                      id: 'traffic_light_3',
                      debugName: 'traffic_light_3',
                      params: {
                        datasetId: 'traffic_light_dataset_3',
                        view: 'stroked',
                        size: 'l',
                        isMinified: false,
                        form: 'round',
                      },
                    },
                  ],
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard13WidgetIdsByType.ImageWidget,
                      id: 'image',
                      debugName: 'image',
                      params: {
                        growRatio: 222,
                      },
                    },
                  ],
                ],
              ],
            },
            params: {},
          },
        ],
      },
      settings: {},
    }

    const result: Dashboard12.State = {
      version: 12,
      boxes: [],
      config: {
        Box0: [
          {
            type: 'widget',
            widgetType: Dashboard12WidgetIdsByType.TrafficLightWidget,
            id: 'traffic_light_1',
            debugName: 'traffic_light_1',
            params: {
              datasetId: 'traffic_light_dataset_1',
              growRatio: 100,
              marginTop: 'xs',
              size: 'm',
              type: 'default',
            },
          },
        ],
        Box1: [
          {
            type: 'switch',
            id: 'switch',
            displays: [
              [
                {
                  type: 'widget',
                  widgetType: Dashboard12WidgetIdsByType.TrafficLightWidget,
                  id: 'traffic_light_2',
                  debugName: 'traffic_light_2',
                  params: {
                    datasetId: 'traffic_light_dataset_2',
                    type: 'text',
                    size: 's',
                  },
                },
              ],
            ],
            params: {},
          },
        ],
        Box2: [
          {
            type: 'grid',
            grid: {
              columnParams: [],
              rowParams: [],
              items: [
                [
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard12WidgetIdsByType.TrafficLightWidget,
                      id: 'traffic_light_3',
                      debugName: 'traffic_light_3',
                      params: {
                        datasetId: 'traffic_light_dataset_3',
                        size: 'm',
                        type: 'text',
                      },
                    },
                  ],
                  [
                    {
                      type: 'widget',
                      widgetType: Dashboard12WidgetIdsByType.ImageWidget,
                      id: 'image',
                      debugName: 'image',
                      params: {
                        growRatio: 222,
                      },
                    },
                  ],
                ],
              ],
            },
            params: {},
          },
        ],
      },
      settings: {},
    }

    expect(migration13.down(source)).toEqual(result)
  })
})