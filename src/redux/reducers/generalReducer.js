const initialState = {
  location: null,
  allData: [],
  current: {},
};

const GeneralReducer = (state = initialState, action) => {
  state = Object.assign({}, state);
  switch (action.type) {
    case 'ON_LOCATION':
      return {...state, location: action.data};

    case 'ON_CLEAR':
      return {...state, location: null};

    case 'ON_ALL_DATA':
      return {...state, allData: action.data};

    case 'ON_CURRENT':
      return {...state, current: action.data};

    default:
      return {...state};
  }
};

export default GeneralReducer;
