import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 1}

  OnIncrement = () => {
    this.setState(prevState => {
      console.log(`prev state value is ${prevState.count + 1}`)
      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The button has been clicked <span> {count} </span>times
        </h1>
        <p>click the button to increase count</p>
        <button className="button" type="button" onClick={this.OnIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
