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
  display: inline-block;
  margin: 0 20px 5px 0;
  width: 24%;
  min-width: 300px;
`

const LabelText = styled.div`
  display: inline-block;
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

const SubmitButton = styled.div`
  display: inline-block;
  width: 275px;
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
`
class Form extends Component {
  state = {
    title: 'Заголовок',
    attributes: 2,
    description: 'Описание объекта',
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
            <Label name="title">
              <LabelText>Заголовок</LabelText>
              <Input
                type="text"
                placeholder={this.state.title}
                onChange={this.handleChange}
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
