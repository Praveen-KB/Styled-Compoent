import {Component} from 'react'

import {Cont, Text} from './styledComponents'

class styledComponents extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '8',
    isSubmitted: false,
  }

  changeUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  chageBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changetopText = event => {
    this.setState({topText: event.target.value})
  }

  submit = event => {
    event.preventDefault()
    this.setState({isSubmitted: true})
  }

  changeFontSize = event => {
    console.log(event.target.value)
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, isSubmitted} = this.state

    return (
      <div>
        <form onSubmit={this.submit}>
          <h1>Meme Generator</h1>
          <label htmlFor="imgUrl">Image URL</label>
          <input
            type="text"
            id="imgUrl"
            placeholder=""
            value={imgUrl}
            onChange={this.changeUrl}
          />
          <label htmlFor="imgUrl">Top Text</label>
          <input
            type="text"
            id="imgUrl"
            placeholder=""
            value={topText}
            onChange={this.changetopText}
          />
          <label htmlFor="imgUrl">Bottom Text</label>
          <input
            type="text"
            id="imgUrl"
            placeholder=""
            value={bottomText}
            onChange={this.chageBottomText}
          />
          <label htmlFor="fontSize">Font Size</label>
          <select
            name="fontSize"
            onChange={this.changeFontSize}
            value={fontSize}
          >
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
          </select>
          <button type="submit">Generate</button>
        </form>
        <div data-testid="meme">
          {isSubmitted && (
            <Cont imgUrl={imgUrl} fontSize={fontSize}>
              <Text fontSize={fontSize}>{topText}</Text>
              <Text fontSize={fontSize}>{bottomText}</Text>
            </Cont>
          )}
        </div>
      </div>
    )
  }
}

export default styledComponents
