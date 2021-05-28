import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import {Provider} from "react-redux"
import store from './redux/Redux'


const app = (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))


reportWebVitals();
