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
`

const HeaderBlock = styled.div`
  border-bottom: 1px solid ${colors.grey};
`

const DescriptionBlock = styled.div`
`

const Index = styled.div`
  color: ${colors.blue};
  position: absolute;
  right: 15px;
  top: 0;
`

const Title = styled.div`
`

const Attributes = styled.div`
  border-bottom: 1px solid ${colors.grey};
`

const Attribute = styled.div``

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
          <HeaderBlock>
            <Title>{title}</Title>
            <Index>{index + 1}</Index>
          </HeaderBlock>
          <Attributes>{this.renderAttributes(attributes)}</Attributes>
          <DescriptionBlock>{description}</DescriptionBlock>
        </CardWrapper>
      </FlexWrapper>
    )
  }
}

export default Card
