import React, {Component} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import history from '../history'

class Landing extends Component {
  constructor() {
    super()
    this.startNewGame = this.startNewGame.bind(this)
  }

  async startNewGame() {
    let {data} = await axios.post('/api/game')
    history.push(`/game/${data.id}`)
  }

  render() {
    return (
      <Wrapper>
        <Header>Welcome to Mafia</Header>
        <ButtonWrapper>
          <Button onClick={this.startNewGame}>Start A Game</Button>
          <Button>Join A Game</Button>
        </ButtonWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.h1`
  font-size: 5em;
  color: black;
`
const Button = styled.button`
  color: black;
  font-size: 2em;
  margin: 3em;
  padding: 0.25em 1em;
  border: 5px solid black;
  border-radius: 3px;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Landing
