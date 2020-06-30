import React, { RefObject, useState } from 'react'

import { getDayPlural } from '@csssr/gpn-utils/lib/pluralization'
import { IconCalendar } from '@gpn-design/uikit/IconCalendar'
import { IconChat } from '@gpn-design/uikit/IconChat'
import { Text } from '@gpn-design/uikit/Text'
import classnames from 'classnames'

import { daysDiff, formatDate, getEndOfDay, getStartOfDay } from '@/common/utils/time'
import { Direction, Position, Tooltip, useTooltipReposition } from '@/Tooltip'

import { Item } from '../..'

import css from './index.css'

type Props = {
  anchorRef: RefObject<HTMLElement>
  color: string
  position: Position
  plan?: Item
  fact?: Item
  forecast?: Item
  title?: string
  comment?: string
  onRequestReposition: () => void
}

const MAX_LENGTH_COMMENT = 280
const CLEAN_COMMENT = 'Комментария нет'

const stopEventHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) =>
  event.stopPropagation()

const getDayText = (start: number, end: number) =>
  getDayPlural(daysDiff(getStartOfDay(start), getEndOfDay(end)))

const DateText: React.FC<{ label: string; startDate: number; endDate: number }> = ({
  label,
  startDate,
  endDate,
}) => (
  <>
    <Text as="span" size="xs" view="primary">
      <span className={css.label}>{label}: </span>
      {formatDate(startDate)} – {formatDate(endDate)}{' '}
    </Text>
    <Text as="span" size="xs" view="primary" weight="bold">
      ({getDayText(startDate, endDate)})
    </Text>
  </>
)

const renderDates = ({
  color,
  title,
  plan,
  fact,
  forecast,
}: {
  color: string
  title?: string
  plan?: Item
  fact?: Item
  forecast?: Item
}) => (
  <>
    {title && (
      <div className={css.dateBlock}>
        <Text as="div" size="xs" transform="uppercase" weight="bold" spacing="xs" view="primary">
          {title}
        </Text>
      </div>
    )}
    {plan && (
      <div className={css.dateBlock}>
        <span className={classnames(css.circle, css.isPlan)} style={{ background: color }} />
        <DateText label="План" startDate={plan.startDate} endDate={plan.endDate} />
      </div>
    )}
    {fact && (
      <div className={css.dateBlock}>
        <span className={css.circle} style={{ background: color }} />
        <DateText label="Факт" startDate={fact.startDate} endDate={fact.endDate} />
      </div>
    )}
    {forecast && (
      <div className={css.dateBlock}>
        <span className={classnames(css.circle, css.isForecast)} style={{ borderColor: color }} />
        <DateText label="Прогноз" startDate={forecast.startDate} endDate={forecast.endDate} />
      </div>
    )}
  </>
)

const renderComment = (comment: string) => {
  const text = comment.substr(0, MAX_LENGTH_COMMENT)

  return (
    <>
      <Text as="div" size="xs" transform="uppercase" weight="bold" spacing="xs" view="primary">
        Комментарий:
      </Text>
      <Text as="span" size="xs" view="primary">
        {text}
        {comment.length > MAX_LENGTH_COMMENT ? '...' : ''}
      </Text>
    </>
  )
}

export const RoadmapTooltip: React.FC<Props> = ({
  anchorRef,
  color,
  position,
  fact,
  forecast,
  plan,
  title,
  comment,
  onRequestReposition,
}) => {
  const [activeSection, changeActiveSection] = useState<'dates' | 'comment'>('dates')

  useTooltipReposition({
    isActive: true,
    scrollAnchorRef: anchorRef,
    onRequestReposition,
  })

  const isActiveDates = activeSection === 'dates'
  const isActiveComment = activeSection === 'comment'
  const content = [
    <div
      onClick={stopEventHandler}
      key="content"
      className={classnames(css.content, isActiveDates && css.dates)}
    >
      {isActiveComment
        ? renderComment(comment || CLEAN_COMMENT)
        : renderDates({ color, title, fact, plan, forecast })}
    </div>,
    <div key="buttons" className={css.buttons}>
      <button
        type="button"
        className={classnames(css.button, css.dates, isActiveDates && css.active)}
        onClick={event => {
          stopEventHandler(event)
          changeActiveSection('dates')
        }}
      >
        <IconCalendar size="s" view="primary" className={css.icon} />
      </button>
      <button
        type="button"
        className={classnames(css.button, css.comment, isActiveComment && css.active)}
        onClick={event => {
          stopEventHandler(event)
          changeActiveSection('comment')
        }}
      >
        <IconChat size="s" view="primary" className={css.icon} />
      </button>
    </div>,
  ] as const

  const renderContent = (contentDirection: Direction) => (
    <div
      className={classnames(
        css.main,
        {
          left: '',
          right: '',
          upLeft: css.upLeft,
          upCenter: '',
          upRight: css.upRight,
          downLeft: css.downLeft,
          downCenter: '',
          downRight: css.downRight,
        }[contentDirection]
      )}
    >
      {content}
    </div>
  )

  return (
    <Tooltip
      direction="upRight"
      isVisible
      isContentHoverable
      renderContent={renderContent}
      className={css.tooltip}
      possibleDirections={['downLeft', 'downRight', 'upLeft', 'upRight']}
      position={position}
    />
  )
}
