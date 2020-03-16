import React from "react";
import ReactDOM from "react-dom";
import App from "./main/webapp/WEB-INF/App.jsx";
import {Provider} from "react-redux";
import {createStore} from "redux";

import rootReducer from "./main/webapp/WEB-INF/reducers/index.js";
const store=createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));