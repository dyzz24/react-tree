import React from 'react';
export const ContextApp = React.createContext();

export const initialState = {
  selectedItems: 0
};

export const testReducer = (state, action) => {
  switch(action.type) {
      case 'child-add':
          return {
              ...state,
              selectedItems: state.selectedItems + 1
          };
      case 'child-remove':
        return {
          ...state,
              selectedItems: state.selectedItems - 1
        }
      default:
          return state
  }
};
