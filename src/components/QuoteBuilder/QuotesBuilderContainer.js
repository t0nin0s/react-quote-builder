import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuoteBuilder from './QuoteBuilder'
import QuoteBuilderModal from './QuoteBuilderModal'
import * as actions from '../../actions'

class QuotesBuilderContainer extends Component {
  componentDidMount = () => {
    this.props.fetchQuoteItems()
  }

  toggleEditMode = () => {
    this.props.changeEditMode(!this.props.editMode)
  }

  showModal = (id) => {
    console.log('the id in showmodal action', id)
    if(id) {
      this.props.openEditModal(id)
    } else {
      this.props.openNewModal()
    }
  }

  closeModal = () => {
    this.props.closeEditModal()
  }

  render () {
    return (
      <div>
        <QuoteBuilder {...this.props}
          toggleEditMode={this.toggleEditMode}
          showModal={this.showModal}
        />
        <QuoteBuilderModal
          show={this.props.modalVisibility}
          onHide={this.closeModal}
        />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  items: state.quotes.itemsByHash,
  fetchingItems: state.quotes.isFetching,
  editMode: state.settings.editMode,
  modalVisibility: state.settings.isModalVisible
})

export const mapDispatchToProps = ({
  fetchQuoteItems: actions.fetchQuoteItems,
  changeEditMode: actions.changeEditMode,
  openEditModal: actions.openEditModal,
  openNewModal: actions.openNewModal,
  closeEditModal: actions.closeEditModal,
  removeItem: actions.removeItem
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuotesBuilderContainer)
