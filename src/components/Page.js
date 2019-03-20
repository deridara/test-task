import React, { Component } from 'react'
import styled from 'styled-components'

import { data } from '../data.json'
import CardsPanel from './CardsPanel'
import Form from './Form'
import * as colors from '../colors'

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`

const Button = styled.div`
  width: 49%;
  height: 50px;
  color: white;
  margin: 0 0 10px;
  background: ${colors.lightBlue};
  border-radius: 3px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  line-height: 50px;
  cursor: pointer;

  &:hover {
    background: ${colors.blue};
  }
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  font: 1em sans-serif;
`

const NavigationRow = styled.div`
  position: relative;
  padding: 20px 15px;
  /* border-top: 1px solid ${colors.grey};
  border-bottom: 1px solid ${colors.grey}; */
  margin: 0 0 10px;
`

const Header = styled.div`
  font-weight: 400;
  font-size: 1.5em;
`

const Switcher = styled.div`
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
`

class Page extends Component {
  state = {
    displayMode: 'panes',
    data: [],
  }

  componentDidMount = () => {
    this.setState({ data })
  }

  addToTopHandler = () => {
      console.log('addToTopHandler')
    const { data } = this.state
    const l = data.length
    this.setState({ data: [data[l - 1], ...data] })
  }

  addToBottomHandler = () => {
    console.log('addToBottomHandler')
    const { data } = this.state
    this.setState({ data: [...data, data[0]] })
  }

  deleteFirstHandler = () => {
    console.log('deleteFirstHandler')
    const { data } = this.state
    data.shift()
    this.setState({ data })
  }

  deleteLastHandler = () => {
    console.log('deleteLastHandler')
    const { data } = this.state
    data.pop()
    this.setState({ data })
  }

  toggleCardsDisplay = e => {
    if (e.target.checked) this.setState({ displayMode: 'cards' })
    else this.setState({ displayMode: 'panes' })
  }

  renderNavigationRow = () => {
    return (
      <NavigationRow>
        <Header>Список объектов</Header>
        <Switcher>
            <input type="checkbox" onChange={this.toggleCardsDisplay} />
        </Switcher>
      </NavigationRow>
    )
  }

  renderButtons = () => {
    const {
      addToTopHandler,
      addToBottomHandler,
      deleteFirstHandler,
      deleteLastHandler,
    } = this
    return (
      <ButtonWrapper>
        <Button onClick={addToTopHandler}>Добавить в начало</Button>
        <Button onClick={addToBottomHandler}>Добавить в конец</Button>
        <Button onClick={deleteFirstHandler}>Удалить первый</Button>
        <Button onClick={deleteLastHandler}>Удалить последний</Button>
      </ButtonWrapper>
    )
  }

  onFormSubmit = formData => {
    const { data } = this.state
    const newCard = this.renderNewCard(formData)
    this.setState({ data: [...data, newCard] })
  }

  renderNewCard = ({ title, attributes: attrAmount, description }) => {
    const { data } = this.state
    let attributes = []
    for (let i = 0; i < attrAmount; i++) {
      attributes.push(`Пункт ${data.length + 1}.${i+1}`)
    }
    const newCard = {
      title,
      description,
      attributes,
    }
    return newCard
  }

  render() {
    const { data, displayMode } = this.state
    return (
      <Wrapper>
        {this.renderButtons()}
        {this.renderNavigationRow()}
        <CardsPanel data={data} displayMode={displayMode} />
        <Form onSubmit={this.onFormSubmit} />
      </Wrapper>
    )
  }
}

export default Page
