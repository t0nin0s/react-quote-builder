import {
  RECEIVE_QUOTES,
  FETCHING_QUOTES,
  CREATE_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM
} from '../actions'

const quotes = (state = { items: [], itemsById: [], itemsByHash: {}, isFetching: false }, action) => {
  switch (action.type) {
    case RECEIVE_QUOTES:
      const quoteItems = action.quote.items.reduce((current, item) => {
        current.itemsById = [...current.itemsById, item.itemId]
        current.itemsByHash = {...current.itemsByHash, [item.itemId]: item}
        return current
      }, { itemsById: [], itemsByHash: {} })
      return {
        ...state,
        itemsById: quoteItems.itemsById,
        itemsByHash: quoteItems.itemsByHash
      }
    case CREATE_ITEM:
      let nextId = Math.max(...state.itemsById) + 1
      return {
        ...state,
        itemsById: [
          ...state.itemsById,
          nextId
        ],
        itemsByHash: {
          ...state.itemsByHash,
          [nextId]: {
            ...action.item,
            itemId: nextId
          }
        }
      }

    case UPDATE_ITEM:
      return {
        ...state,
        itemsByHash:
        {
          ...state.itemsByHash,
          [action.item.itemId]: action.item
        }
      }

    case REMOVE_ITEM:
      let { [(action.id).toString()]: deletedItem, ...rest } = state.itemsByHash
      return {
        ...state,
        itemsById: state.itemsById.filter(item => {
          return item !== action.id
        }),
        itemsByHash: rest
      }

    case FETCHING_QUOTES:
      return { ...state,
        isFetching: action.isFetching
      }
    default:
      return state
  }
}

export default quotes
