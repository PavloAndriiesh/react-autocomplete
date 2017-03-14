import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
injectTapEventPlugin()

render(<App />, document.getElementById('app'))
