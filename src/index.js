import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import the React-Redux provider
import { Provider } from 'react-redux'
import store from './redux/store';



ReactDOM.render(
  <React.StrictMode>
    {/* // wrap <App/> component with the react-redux <provider> and pass the imported stpre as a prop */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();








