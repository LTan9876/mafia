import React from 'react'
import styled from 'styled-components'

const Landing = () => {
  return (
    <Wrapper>
      <Header>Welcome to Mafia</Header>
      <Button>Start A Game</Button>
    </Wrapper>
  )
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

export default Landing
