import {
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL
} from '../actions'

const edition = (state = { item: {}, isModalVisible: false }, action) => {
  switch (action.type) {
    case OPEN_EDIT_MODAL:
      return {
        item: action.item,
        isModalVisible: true
      }
    case CLOSE_EDIT_MODAL:
      return { ...state,
        isModalVisible: false
      }
    default:
      return state
  }
}

export default edition
