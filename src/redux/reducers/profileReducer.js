/* const initialState = {
  user: {
    name: null,
    description: null,
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: {
          name: action.payload.name,
          description: action.payload.description,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
 */

const initialState = {
  user: {
    name: '',
    description: '',
  },
  // otros estados relacionados con el perfil
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    case 'GET_USER_DATA_SUCCESS':
      console.log('User data:', action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name, // Actualizar el nombre del usuario según los datos obtenidos
          description: action.payload.description,
        },
      };
    // otros casos de acción para actualizar los datos del usuario
    default:
      return state;
  }
};

export default profileReducer;

