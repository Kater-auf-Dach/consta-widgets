import { GroupItem as CoreGroup } from '@/_private/components/BarChart/components/Group'

import { Group } from '../'
import { transformGroupsToCommonGroups } from '../helpers'

describe('transformGroupsToCoreGroups', () => {
  const groups: readonly Group[] = [
    {
      groupName: 'март',
      values: [4, 2, undefined],
    },
  ]

  it('преобразует BarChart группы к основным группам', () => {
    const received = transformGroupsToCommonGroups(groups, ['red', 'blue', 'green'])

    const expected: readonly CoreGroup[] = [
      {
        name: 'март',
        columns: [
          { total: 4, sections: [{ color: 'red', value: 4 }] },
          { total: 2, sections: [{ color: 'blue', value: 2 }] },
          { total: 0, sections: undefined },
        ],
        reversedColumns: [
          { total: 0, sections: undefined },
          { total: 0, sections: undefined },
          { total: 0, sections: undefined },
        ],
      },
    ]

    expect(received).toEqual(expected)
  })
})
