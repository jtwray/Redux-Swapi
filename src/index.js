import React from "react";
import ReactDOM from "react-dom";
import { Provider} from "react-redux";
import App from "./App";
import { applyMiddleware,createStore,compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import "./index.css";



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware( thunk, logger ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, 
    )
  );	

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
