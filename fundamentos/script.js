const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (action) => action();

console.log(doingThings(wakeUp));
