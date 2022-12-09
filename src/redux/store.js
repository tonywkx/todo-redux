import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : {}

/* store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  }) */

  /* npm install redux-persist */

  /* https://ru.stackoverflow.com/questions/1115512/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%B4%D0%BB%D1%8F-to-do-list-%D0%BD%D0%B0-react */

 /*  dnd react youtube */

export const store = createStore(rootReducer, persistedState, composeWithDevTools());