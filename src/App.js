import React, {Component} from 'react';

import List from './component/list';
import Image from './component/Image';

import './component/style/App.css'
class App extends Component {
  render(){
    return (
      <div className="App">
        <Image/>
        <List />
      </div>
    );
  }
}

export default App;
