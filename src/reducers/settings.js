import {
  EDIT_MODE,
  OPEN_NEW_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL
} from '../actions'

const settings = (state = { editMode: false, isModalVisible: false, update: false, itemId: null }, action) => {
  switch (action.type) {
    case EDIT_MODE:
      return { ...state,
        editMode: action.mode
      }
    case OPEN_NEW_MODAL:
      return {
        ...state,
        update: false,
        isModalVisible: true
      }
    case OPEN_EDIT_MODAL:
      return { ...state,
        itemId: action.id,
        update: true,
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

export default settings
