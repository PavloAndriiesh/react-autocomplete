import React from 'react'
import customTheme from '../styles/theme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Autocomplete from '../components/Autocomplete'

class App extends React.Component {
  render () {
    return (
      <div style={{padding: '20px 50px'}}>
        <MuiThemeProvider muiTheme={customTheme}>
          <Autocomplete />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
