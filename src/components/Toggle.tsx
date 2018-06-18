import * as React from 'react'
import { SwitchProps } from './Switch'
import { callAll } from '../utilities/callAll'

interface TogglerProps {
  on?: boolean
  toggle(): void
  reset(): void
  getTogglerProps(options?: SwitchProps): SwitchProps
}

interface ToggleProps {
  defaultOn?: boolean
  on?: boolean
  onToggle(on?: boolean): void
  onReset(on?: boolean): void
  render(toggle: TogglerProps): JSX.Element
}

interface ToggleState {
  on: boolean | undefined
}

export default class Toggle extends React.Component<ToggleProps, ToggleState> {
  static defaultProps = {
    defaultOn: false,
    onToggle: () => {},
    onReset: () => {},
  }

  private initialState: ToggleState = { on: this.props.defaultOn }

  constructor(props: ToggleProps) {
    super(props)
    this.state = this.initialState
  }

  render(): JSX.Element {
    return this.props.render({
      on: this._isOnControlled() ? this.props.on : this.state.on,
      toggle: this._toggle,
      reset: this._reset,
      getTogglerProps: this._getTogglerProps,
    })
  }

  private _toggle = () => {
    const { on, onToggle } = this.props
    if (this._isOnControlled()) {
      onToggle(!on)
    } else {
      this.setState(({ on }) => ({ on: !on }), () => onToggle(this.state.on))
    }
  }

  private _reset = () => {
    const { on, onReset } = this.props
    if (this._isOnControlled()) {
      onReset(!on)
    } else {
      this.setState(this.initialState, () => onReset(this.state.on))
    }
  }

  private _getTogglerProps = ({
    onClick,
    ...props
  }: SwitchProps = {}): SwitchProps => {
    return {
      onClick: callAll(onClick, this._toggle),
      ...props,
    }
  }

  private _isOnControlled(): boolean {
    return this.props.on !== undefined
  }
}
