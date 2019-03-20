import React, { Component } from 'react'
import styled from 'styled-components'

import * as colors from '../../colors'

const FlexWrapper = styled.div`
  display: flex;
  width: 32%;
  margin: 0 0 20px;
`

const CardWrapper = styled.div`
  background: ${colors.lightGrey};
  box-sizing: border-box;
  width: 100%;
  position: relative;
  padding: 5px 10px;
`

const Index = styled.div`
  color: ${colors.blue};
  position: absolute;
  right: 20px;
  top: 20px;
`

const Title = styled.div`
  padding: 15px 5px;
  border-bottom: 1px solid ${colors.grey};
`

const Attributes = styled.div`
  border-bottom: 1px solid ${colors.grey};
  padding: 10px 0 10px 20px;
`

const Attribute = styled.div`
margin: 5px 0;
`

const DescriptionBlock = styled.div`
  padding: 15px 5px;
`

class Card extends Component {
  renderAttributes = attributes => {
    return attributes.map(a => <Attribute>{a}</Attribute>)
  }
  render() {
    const { title, attributes, description } = this.props.data
    const { index } = this.props
    return (
      <FlexWrapper>
        <CardWrapper>
          <Title>{title}</Title>
          <Index>{index + 1}</Index>
          <Attributes>{this.renderAttributes(attributes)}</Attributes>
          <DescriptionBlock>{description}</DescriptionBlock>
        </CardWrapper>
      </FlexWrapper>
    )
  }
}

export default Card
