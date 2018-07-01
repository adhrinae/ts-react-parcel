import * as React from 'react'

import Toggle from './Toggle'
import ToggleButton from './ToggleButton'

namespace Layers {
  export const Layer1 = () => <Layer2 />

  const Layer2 = () => (
    <Toggle.Consumer>
      {({ on }) => (
        <>
          {on ? 'The button is on' : 'The button is off'}
          <Layer3 />
        </>
      )}
    </Toggle.Consumer>
  )

  const Layer3 = () => <Layer4 />

  const Layer4 = () => (
    <Toggle.Consumer>
      {({ on, toggle }) => <ToggleButton on={on} onClick={toggle} />}
    </Toggle.Consumer>
  )
}

interface AppProps {
  onToggle?(on: boolean): void
}

function App({
  onToggle = (on: boolean) => console.log('ToggleStatus:', on),
}: AppProps) {
  return (
    <div className="container" data-testid="toggle-container">
      <Toggle onToggle={onToggle}>
        <Layers.Layer1 />
      </Toggle>
    </div>
  )
}

export default App
