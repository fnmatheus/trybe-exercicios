const { combineReducers } = require("redux");

const THEME = 'THEME';
const STATUS = 'STATUS';

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const handleTheme = () => ({ type: THEME })

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case THEME:
      return {...state, theme: (state.theme === 'dark') ? 'ligth' : 'dark'};
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const handleStatus = () => ({ type: STATUS });

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS:
      return {...state, status: (state.status === 'offline') ? 'online' : 'offline'};
    default:
      return state;
  }
};

const reducers = combineReducers({ themeButton, statusButton });

store.subscribe(() => {});

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch(handleTheme);
});

statusButton.addEventListener('click', () => {
  store.dispatch(handleStatus);
});
