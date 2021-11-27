import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JobDetail from './components/jobDetail';
import reportWebVitals from './reportWebVitals';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<App/>}/>
      <Route path='/detail/:id' element={<JobDetail/>}/>
    </Routes>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
