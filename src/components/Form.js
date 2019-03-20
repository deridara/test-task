import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from '../colors'

const FomWrapper = styled.div`
  width: 100%;
  margin: 15px 0 0;
`

const Fieldset = styled.fieldset`
  padding: 0 25px 15px;
`

const Legend = styled.legend`
  margin: 0 0 15px;
  font-size: 1.5em;
  font-weight: 400;
`

const Label = styled.label`
  display: block;
  margin: 0 20px 5px 0;
`

const LabelText = styled.div`
  display: inline-block;
  margin: 0 0 10px;

  &::after {
    ${props => props.required && 'content: " *"; color: red;'}
  }
`

const Input = styled.input`
  display: block;
  margin: 0 0 15px;
  width: 100%;
  height: 35px;
  font-size: 1em;
  padding: 0 10px;
  box-shadow: ${props =>
    console.log(props) || (props.error && '0 0 3px 3px red')};
`

const SubmitButton = styled.div`
  display: inline-block;
  width: 200px;
  height: 40px;
  color: white;
  background: ${colors.lightBlue};
  border-radius: 3px;
  box-sizing: border-box;
  text-align: center;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background: ${colors.blue};
  }

  &:active {
    background: ${colors.darkBlue};
  }
`
class Form extends Component {
  state = {
    title: 'Заголовок',
    attributes: 2,
    description: 'Описание объекта',
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title) this.props.onSubmit(this.state)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render = () => {
    return (
      <FomWrapper>
        <form>
          <Fieldset>
            <Legend>Добавить новый объект</Legend>
            <Label name="title">
              <LabelText required>Заголовок</LabelText>
              <Input
                name="title"
                type="text"
                placeholder={this.state.title}
                onChange={this.handleChange}
                error={!this.state.title}
              />
            </Label>

            <Label name="attributes">
              <LabelText>Количество пунктов</LabelText>
              <Input
                name="attributes"
                type="number"
                placeholder={this.state.attributes}
                onChange={this.handleChange}
              />
            </Label>

            <Label name="description">
              <LabelText>Описание</LabelText>
              <Input
                name="description"
                type="text"
                placeholder={this.state.description}
                onChange={this.handleChange}
              />
            </Label>
            <SubmitButton type="submit" onClick={this.handleSubmit}>
              Добавить
            </SubmitButton>
          </Fieldset>
        </form>
      </FomWrapper>
    )
  }
}

export default Form
