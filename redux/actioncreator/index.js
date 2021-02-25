export const addLike = payload => ({
  type: 'ADD_LIKE',
  payload: payload 
})

export const removeLike = payload => ({
  type: 'REMOVE_LIKE',
  payload: payload 
})

export const fetchLike = payload => ({
  type: 'FETCH_LIKES',
  payload: payload 
})

export const climb = payload => ({
  type: 'ADD_FLAG',
  payload: payload 

})

export const unclimb = payload => ({
  type: 'REMOVE_FLAG',
  payload: payload 

})

export const fetchClimb = payload => ({
  type: 'FETCH_FLAGS',
  payload: payload 

})