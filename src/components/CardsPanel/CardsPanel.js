import React from 'react'
import styled from 'styled-components'

import Pane from './Pane'
import Card from './Card'

const CardPaneWrapper = styled.div`
  ${props => {
    if (props.displayMode === 'cards') {
      return `
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      `
    }
  }}
`

class CardsPanel extends React.Component {
  renderElement = (objectData, index) => {
    const { displayMode } = this.props
    return displayMode === 'panes' ? (
      <Pane data={objectData} index={index} key={index}/>
    ) : (
      <Card data={objectData} index={index} key={index}/>
    )
  }

  render() {
    const { displayMode, data } = this.props
    return (
      <CardPaneWrapper displayMode={displayMode}>
        {data.map((data, index) => this.renderElement(data, index))}
      </CardPaneWrapper>
    )
  }
}

export default CardsPanel
