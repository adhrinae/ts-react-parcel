import * as React from 'react'

export interface ToggleButtonProps {
  on?: boolean
  className?: string
  onClick?(): void
}

const ToggleButton = ({ on, className = '', ...props }: ToggleButtonProps) => {
  return (
    <div className="toggle">
      <input className="toggle-input" type="checkbox" />
      <button
        data-testid="toggle-button"
        className={`${className} toggle-btn ${
          on ? 'toggle-btn-on' : 'toggle-btn-off'
        }`}
        {...props}
      />
    </div>
  )
}

export default ToggleButton
