import * as React from 'react'
import { bind } from 'helpful-decorators'

type RenderPropChildren<T> = (context: T) => JSX.Element

interface ToggleProps {
  onToggle(on: boolean): void
  children: RenderPropChildren<ToggleState> | React.ReactNode
}

interface ToggleState {
  on: boolean
  toggle(): void
}

const ToggleContext = React.createContext<ToggleState>({
  on: false,
  toggle: () => {},
})

const ToggleConsumer: React.SFC<{
  children: RenderPropChildren<ToggleState>
}> = props => (
  <ToggleContext.Consumer>
    {context => {
      if (!context) {
        throw new Error(
          'Toggle.Consumer cannot be rendered outside the Toggle Component'
        )
      }

      return props.children(context)
    }}
  </ToggleContext.Consumer>
)

export default class Toggle extends React.Component<ToggleProps, ToggleState> {
  static Consumer = ToggleConsumer

  state = {
    on: false,
    toggle: this.toggle,
  }

  render() {
    const { children, ...restProps } = this.props
    const renderUI: RenderPropChildren<ToggleState> | React.ReactNode =
      typeof children === 'function' ? children(this.state) : children

    return (
      <ToggleContext.Provider value={this.state} {...restProps}>
        {renderUI}
      </ToggleContext.Provider>
    )
  }

  @bind
  private toggle() {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    )
  }
}
