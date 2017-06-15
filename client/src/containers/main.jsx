import React from 'react'
import ChartContainer from '../containers/chartContainer'

class Main extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   temp: []
    // }

  }

  render(){
    return (
      <div>
        <h1> Main Test </h1>
        <h2>test</h2>
        <ChartContainer />
      </div>
      )
  }

}

export default Main 