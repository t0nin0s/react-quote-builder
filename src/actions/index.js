export const RECEIVE_QUOTES = 'RECEIVE_QUOTES'
export const FETCH_QUOTES = 'FETCH_QUOTES'
export const FETCHING_QUOTES = 'FETCHING_QUOTES'
export const EDIT_MODE = 'EDIT_MODE'
export const OPEN_NEW_MODAL = 'OPEN_NEW_MODAL'
export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL'
export const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL'
export const CREATE_ITEM = 'CREATE_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const fetchingQuoteItems = (isFetching) => ({
  type: FETCHING_QUOTES,
  isFetching
})

export const receiveQuoteItems = (quote) => ({
  type: RECEIVE_QUOTES,
  quote
})

export const fetchQuoteItems = () => ({
  type: FETCH_QUOTES
})

export const changeEditMode = (mode) => ({
  type: EDIT_MODE,
  mode
})

export const openNewModal = () => ({
  type: OPEN_NEW_MODAL
})

export const openEditModal = (id) => ({
  type: OPEN_EDIT_MODAL,
  id
})

export const closeEditModal = () => ({
  type: CLOSE_EDIT_MODAL
})

export const createItem = (item) => ({
  type: CREATE_ITEM,
  item
})

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  item
})

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id
})
