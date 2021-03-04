import { Component } from 'react'
import { Provider } from 'react-redux'
import store from "./store";

import Count from "./component/count";
import Control from "./component/Control";

class App extends Component{
  render() {
      return (
          <Provider store={store}>
              <div className="App">
                  <h1>React Redux</h1>
                  <Count />
                  <Control />
              </div>
          </Provider>
      );
  }
}

export default App;
