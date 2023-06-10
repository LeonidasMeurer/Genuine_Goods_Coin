import './styles.css';

import React, { Component } from 'react';
import { Link } from '../routes';
import App from './index.js'


// ReactDOM.render(
//   <React.StrictMode>
//     <h2>Hello</h2>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// class Index extends Component {

//   render() {
//     return (
//           <App/>
//     );
//   }
// }

// export default Index;

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}