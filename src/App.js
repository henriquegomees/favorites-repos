import React, { Component } from 'react'

import Header from './components/Header'
import Repos from './containers/Repos'
import Favorites from './containers/Favorites'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="wrapper">
          <Repos />
          <Favorites />
        </div>
      </div>
    )
  }
}

export default App;
