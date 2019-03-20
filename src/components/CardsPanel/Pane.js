import React, { Component } from 'react'
import styled from 'styled-components'

import * as colors from '../../colors'

const PaneWrapper = styled.div`
  background: ${colors.lightGrey};
  box-sizing: border-box;
  width: 100%;
  padding: 5px 10px;
  margin: 0 0 10px;
`

const HeaderBlock = styled.div`
  padding: 10px 0 0;
  border-bottom: 1px solid ${colors.grey};
  display: flex;
  flex-direction: row;
`

const DescriptionBlock = styled.div`
  margin: 10px 10px;
`

const Index = styled.div`
  color: ${colors.blue};
  padding: 0 10px 0;
`

const Title = styled.div`
  width: 24%;
  margin: 0 15px;
`

const AttributeWrapper = styled.div`
  width: 70%;
`

const Attribute = styled.div`
  display: inline-block;
  width: 30%;
  margin: 0 0 10px;
`

class Pane extends Component {
  renderAttributes = attributes => {
    return attributes.map(a => <Attribute>{a}</Attribute>)
  }
  render() {
    const { title, attributes, description } = this.props.data
    const { index } = this.props
    return (
      <PaneWrapper>
        <HeaderBlock>
          <Index>{index + 1}</Index>
          <Title>{title}</Title>
          <AttributeWrapper>
            {this.renderAttributes(attributes)}
          </AttributeWrapper>
        </HeaderBlock>
        <DescriptionBlock>{description}</DescriptionBlock>
      </PaneWrapper>
    )
  }
}

export default Pane
