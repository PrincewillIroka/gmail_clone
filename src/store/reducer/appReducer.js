import initialState from '../state';

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleActiveTab': {
      const activeTab = action.payload.activeTab;
      return {
        ...state,
        activeTab,
      };
    }
    default:
      return state;
  }
};
