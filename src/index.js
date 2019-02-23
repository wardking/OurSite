import React from 'react';
import ReactDOM from 'react-dom';
import PageRoute from './router/index';
sessionStorage.getItem("index")&&sessionStorage.removeItem("index");
ReactDOM.render(<PageRoute/>, document.getElementById('root'));