import './styles.css';

import React, { Component } from 'react';
import { Link } from '../routes';
import App from './components/index.js'


// ReactDOM.render(
//   <React.StrictMode>
//     <h2>Hello</h2>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

class Index extends Component {

  render() {
    return (
          <App/>
    );
  }
}

export default Index;