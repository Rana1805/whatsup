import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.jsx';
import Footer from './footer.jsx';
import './index.css';
 ReactDOM.render(
   <React.StrictMode>
     <Nav />
     <Footer />
   </React.StrictMode>,
   document.getElementById('root'),
 );

 if (undefined /* [snowpack] import.meta.hot */ ) {
       undefined /* [snowpack] import.meta.hot */ .accept();
     }