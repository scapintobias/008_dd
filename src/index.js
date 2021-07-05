import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './uninext/uninext.css';
import App from './App';

if (module.hot) {
	module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
