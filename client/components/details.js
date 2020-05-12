import React, {Component} from 'react'
import styled from 'styled-components'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async handleChange(value) {
    await this.setState({
      password: value
    })
  }

  render() {
    return (
      <Wrapper>
        <form>
          <label htmlFor="pw">Enter Room Password</label>
          <Input type="text" id="pw" name="pw" onChange={this.handleChange} />
        </form>
        <Button>Set Password</Button>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 2em;
`
const Button = styled.button`
  color: black;
  font-size: 0.5em;
  margin: 2em;
  padding: 0.25em 1em;
  border: 3px solid black;
  border-radius: 2px;
`
const Input = styled.input`
  width: 50%;
  padding: 12px 20px;
  border: 2px solid black;
  border-radius: 1px;
  font-size: 0.5em;
  text-align: center;
`

export default Details
