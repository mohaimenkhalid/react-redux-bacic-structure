import { createStore } from 'redux'

function App() {

    const reducer = (state={}, action) => {
        if (action.type === 'A') {
            return {
                ...state,
                'A': 'this is from an action.'
            }
        }
        if(action.type === 'B') {
            return {
                ...state,
                'B' : 'this is from B'
            }
        }
        return state;
    }
    const store = createStore(reducer)

    store.subscribe(() => {
        console.log(store.getState());
    })

    store.dispatch({type: 'A'})
    store.dispatch({type: 'B'})
    store.dispatch({type: 'some'})

  return (
    <div className="App">
        <h1>React Redux</h1>
    </div>
  );
}

export default App;
