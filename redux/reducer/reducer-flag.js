const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FLAG_SUCCEEDED':
      if (state.findIndex(item => item.id == action.payload.id) == -1) {
        return [{ ...action.payload }, ...state]
      }
      return [...state]

    case 'FETCH_LIKES_SUCCEEDED':
      return [
        ...action.payload
      ]

    case 'REMOVE_FLAG_SUCCEEDED':
      return [...state.filter(item => item.id != action.payload.id)]
    default:
      return state
  }
}
export default reducer



