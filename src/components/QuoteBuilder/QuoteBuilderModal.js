import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import {
  Modal,
  Button
} from 'react-bootstrap'
import QuoteItemEditor from './QuoteItemEditor'

class QuoteBuilderModal extends Component {
  render () {
    const {
      update,
      itemId,
      items,
      updateItem,
      createItem
    } = this.props
    console.log('the items in the modal are', items)
    return (
      <Modal {...this.props} bsSize='large' aria-labelledby='contained-modal-title-lg'>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-lg'>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet.</p>
          <QuoteItemEditor
            updateItem={updateItem}
            createItem={createItem}
            update={update}
            itemId={itemId}
            items={items}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export const mapStateToProps = (state) => ({
  update: state.settings.update,
  itemId: state.settings.itemId,
  items: state.quotes.itemsByHash
})

export const mapDispatchToProps = ({
  updateItem: actions.updateItem,
  createItem: actions.createItem
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteBuilderModal)
