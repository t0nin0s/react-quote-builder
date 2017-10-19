import React, { Component } from 'react'
import {
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

class QuoteItemEditor extends Component {
  constructor() {
    super()
    this.state = {
      itemId: null,
      description: '',
      price: 0
    }
  }

  handleOnChange = (event) => {
    const { value, id } = event.target
    this.setState({
      [id]: value
    })
  }

  componentDidMount = () => {
    const { update, itemId, items } = this.props
    if(update) {
      this.setState({
        itemId: items[itemId].itemId,
        description: items[itemId].description,
        price: items[itemId].price
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.props.itemId) {
      this.props.updateItem(this.state);
    }
    else {
      this.props.createItem(this.state);
    }
  }

  render () {
    return (
      <form className='form-signin' onSubmit={this.handleSubmit}>
        <FormGroup>
          <h2 className='form-signin-heading'>Please sign in</h2>
        </FormGroup>
        <FormGroup>
          <FormControl
            value={this.state.description}
            onChange={this.handleOnChange}
            className='form-control'
            id='description'
            type='string'
            placeholder='Enter description'
          />
          <FormControl
            value={this.state.price}
            onChange={this.handleOnChange}
            className='form-control'
            id='price'
            type='number'
            placeholder='Price'
          />
        </FormGroup>
        <Button bsSize='large' bsStyle='primary' block type='submit'>Sign in</Button>
      </form>
    )
  }
}

export default QuoteItemEditor
