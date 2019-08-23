export const saveState = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (error) {
    console.error('Can\'t save state to localStorage!');
  }
};

// Selector of reducers, which we want to store in LocalStorage
export const stateToStorageSelector = state => ({
  userInfo: state.userInfo
});

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return {};
    }

    const state = JSON.parse(serializedState);

    saveState(state);

    return state;
  } catch (error) {
    return {};
  }
};
