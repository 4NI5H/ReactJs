import react from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'
import './stylesheet/stylesheet.css'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'))