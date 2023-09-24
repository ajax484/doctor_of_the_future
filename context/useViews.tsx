import {create} from 'zustand';

const initialState = {
  cardViews: {},
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cardViewsState');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return initialState;
  }
};

const useCardViewsStore = create((set) => ({
  ...loadState(),
  incrementCardViewCount: (cardId) => {
    set((state) => ({
      cardViews: {
        ...state.cardViews,
        [cardId]: (state.cardViews[cardId] || 0) + 1,
      },
    }));
  },
}));

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cardViewsState', serializedState);
  } catch (error) {
 
  }
};

useCardViewsStore.subscribe((state) => {
  saveState(state);
});

export default useCardViewsStore;
