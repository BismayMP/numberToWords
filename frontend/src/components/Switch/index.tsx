import React from 'react'
import './index.scss'

type Props = {
  handleSwitch: () => void
  value: boolean
  labelStart?: string
  labelEnd?: string
}

const Switch = ({
  handleSwitch,
  value,
  labelStart = 'off',
  labelEnd = 'on',
}: Props) => {
  return (
    <div className="switch-container">
      <label className="switch">
        {' '}
        {labelStart}
        <input
          type="checkbox"
          id="customSwitches"
          checked={value}
          onChange={handleSwitch}
        />
        <span className="lever" />
        {labelEnd}
      </label>
    </div>
  )
}

export default Switch
