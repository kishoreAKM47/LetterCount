// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: ''}

  onCountLetter = event => {
    const newText = event.target.value
    this.setState({letterCount: newText})
  }

  render() {
    const {letterCount} = this.state
    const count = letterCount.length
    return (
      <div className="bg-container">
        <div className="container">
          <div className="calculate-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label-text" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              type="text"
              className="text"
              placeholder="Enter the phrase"
              id="userInput"
              onChange={this.onCountLetter}
            />
            <p className="letters">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
