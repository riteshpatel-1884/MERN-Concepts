//1. Prop Drilling refers to the process of passing data from a parent component down to child components, even if intermediate components don’t need that data — they still have to receive it just to pass it along.
//Why is it a Problem?
// Intermediate components (Parent, Child) don’t need the user, but they are forced to pass it.
// If you have a deep component tree, this becomes hard to maintain.
// Any change to prop structure requires updating every level.

//2. Redux is a state management library for JavaScript apps, commonly used with React.
//It allows global state management, meaning you can access or modify state from any component without having to pass props manually (i.e., avoids prop drilling).

// Redux Flow:
// Component dispatches an Action
// Redux Store receives Action
// Reducer updates the state
// Component gets updated state using useSelector

//Installation: npm install redux react-redux
