import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

class Autocomplete extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    this.loadData((data) => {
      this.setState({
        dataSource: data
      })
    })
  }

  loadData (success, fail) {
    const xobj = new XMLHttpRequest()
    xobj.overrideMimeType("application/json")
    xobj.open('GET', 'birds.json', true)
    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        success(JSON.parse(xobj.responseText))
      } else if (xobj.status !== 200) {
        fail(xobj)
      }
    };
    xobj.send(null)
  }

  render () {
    return (
      <div>
        <div>
          <h2>Currently in DB {this.state.dataSource.length} birds</h2>
          <h3>Find bird by name:</h3>
        </div>
        <AutoComplete
          hintText="Type bird name"
          dataSource={this.state.dataSource}
          maxSearchResults={5}
          filter={AutoComplete.caseInsensitiveFilter}
        />
      </div>
    )
  }
}

export default Autocomplete
