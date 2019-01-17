import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterView from 'router/routerview'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
         <h1> 1</h1>
        </header>
        <section>
            <RouterView></RouterView>
        </section>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
