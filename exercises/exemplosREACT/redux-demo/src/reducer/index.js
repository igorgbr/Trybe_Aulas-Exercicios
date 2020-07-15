const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    
    case 'SET_VISIBILITY_FILTER':
      return [...state, action.filter];
    default:
      return state;
  }
}

export default listReducer;