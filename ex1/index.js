const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const showColor = (color) => {
  const text = document.getElementById('value');
  text.innerText = color;
}

showColor(INITIAL_STATE.colors[0]);

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {...state, index: (state.index + 1 < state.colors.length) ? state.index + 1 : 0};
    case PREVIOUS_COLOR:
      return {...state, index: (state.index - 1 >= 0) ? state.index - 1 : state.colors.length - 1};
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  showColor(colors[index]);
});

const nextColor = () => store.dispatch({ type: NEXT_COLOR });
const previousColor = () => store.dispatch({ type: PREVIOUS_COLOR });

const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

nextButton.addEventListener('click', nextColor);
previousButton.addEventListener('click', previousColor);
