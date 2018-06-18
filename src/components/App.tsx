import * as React from 'react'

import Toggle from './Toggle'
import Switch from './Switch'

interface AppState {
  timesClicked: number
  on: boolean
}

export default class App extends React.Component<{}, AppState> {
  private initialState: AppState = { timesClicked: 0, on: false }

  constructor(props: {}) {
    super(props)
    this.state = this.initialState
  }

  render(): JSX.Element {
    const { timesClicked, on } = this.state
    return (
      <Toggle
        on={on}
        onToggle={this._handleToggle}
        onReset={this._handleReset}
        render={toggle => (
          <div>
            <Switch
              {...toggle.getTogglerProps({
                on: toggle.on,
              })}
            />
            {timesClicked > 4 ? (
              <div data-test="click-warning">
                You've Clicked too much!
                <br />
                <button onClick={toggle.reset}>reset</button>
              </div>
            ) : timesClicked > 0 ? (
              <div data-test="click-counter">Click count: {timesClicked}</div>
            ) : null}
          </div>
        )}
      />
    )
  }

  private _handleToggle = () => {
    this.setState(({ timesClicked, on }) => ({
      timesClicked: timesClicked + 1,
      on: timesClicked >= 4 ? false : !on,
    }))
  }

  private _handleReset = () => {
    this.setState(this.initialState)
  }
}
