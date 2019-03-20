import React, { Component } from 'react'
import styled from 'styled-components'
import { data } from '../data.json'

import CardsPane from './CardsPane'
import Form from './Form'

const Button = styled.div`
  width: 50%;
  height: 50px;
  background: lightblue;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  line-height: 50px;
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const NavigationRow = styled.div``

class Page extends Component {

state = {
    displayMode: 'cards'
}

  addToTopHandler = () => {
    console.log('addToTopHandler')
  }

  addToBottomHandler = () => {
    console.log('addToBottomHandler')
  }

  deleteFirstHandler = () => {
    console.log('deleteFirstHandler')
  }

  deleteLastHandler = () => {
    console.log('deleteLastHandler')
  }

  toggleCardsDisplay = (e) => {
      if (e.target.checked) this.setState({displayMode: 'cards'})
      else this.setState({displayMode: 'panes'})
  }


  renderNavigationRow = () => {
    return (
      <NavigationRow>
        <h4>Список объектов</h4>
        <label>
          <input type="checkbox" onChange={this.toggleCardsDisplay}/>
        </label>
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
      <React.Fragment>
        <Button onClick={addToTopHandler}>Добавить в начало</Button>
        <Button onClick={addToBottomHandler}>Добавить в конец</Button>
        <Button onClick={deleteFirstHandler}>Удалить первый</Button>
        <Button onClick={deleteLastHandler}>Удалить последний</Button>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Wrapper>
        {this.renderButtons()}
        {this.renderNavigationRow()}
        <CardsPane data={data} displayMode={this.state.displayMode} />
        <Form />
      </Wrapper>
    )
  }
}

export default Page
