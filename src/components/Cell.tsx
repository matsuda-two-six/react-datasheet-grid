import React, { FC } from 'react'
import cx from 'classnames'

export const Cell: FC<{
  gutter: boolean
  stickyRight: boolean
  disabled?: boolean
  className?: string
  active?: boolean
  children?: any
  width: number
  left: number
  rowIndex: number
  colIndex: number
}> = ({
  children,
  gutter,
  stickyRight,
  active,
  disabled,
  className,
  width,
  left,
  rowIndex,
  colIndex,
}) => {
  return (
    <div
      className={cx(
        'dsg-cell',
        gutter && 'dsg-cell-gutter',
        disabled && 'dsg-cell-disabled',
        gutter && active && 'dsg-cell-gutter-active',
        stickyRight && 'dsg-cell-sticky-right',
        className
      )}
      style={{
        width,
        left: stickyRight ? undefined : left,
      }}
      id={`_${rowIndex}-${colIndex}`}
    >
      {children}
    </div>
  )
}
