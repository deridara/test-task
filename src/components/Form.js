import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from '../colors'

const FomWrapper = styled.div`
  width: 100%;
  margin: 15px 0 0;
`
const LabelText = styled.label`
  display: block;
  margin: 0 0 10px;
`

const Input = styled.input`
  display: block;
  margin: 0 0 15px;
  height: 35px;
  width: 250px;
  font-size: 1em;
  padding: 0 10px;
`

const Legend = styled.legend`
  margin: 0 0 15px;
  font-size: 1.5em;
  font-weight: 400;
`

const Fieldset = styled.fieldset`
  padding: 0 25px 15px;
`

const SubmitButton = styled.div`
  width: 250px;
  height: 50px;
  color: white;
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
class Form extends Component {
  state = {
    title: 'Заголовок 7',
    attributes: 2,
    description: 'Описание 7 объекта',
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
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
            <label name="title">
              <LabelText>Заголовок</LabelText>
              <Input
                type="text"
                placeholder={this.state.title}
                onChange={this.handleChange}
              />
            </label>

            <label name="attributes">
              <LabelText>Количество пунктов</LabelText>
              <Input
                name="attributes"
                type="number"
                placeholder={this.state.attributes}
                onChange={this.handleChange}
              />
            </label>

            <label name="description">
              <LabelText>Описание</LabelText>
              <Input
                name="description"
                type="text"
                placeholder={this.state.description}
                onChange={this.handleChange}
              />
            </label>
            <SubmitButton type="submit" onClick={this.handleSubmit}>Добавить</SubmitButton>
          </Fieldset>
        </form>
      </FomWrapper>
    )
  }
}

export default Form
