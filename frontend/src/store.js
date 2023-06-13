import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productsReducer } from './reducers/productReducer';
import { profileReducer, userReducer,forgotPasswordReducer } from './reducers/userReducer';

const reducer = combineReducers({
  products : productsReducer,
  productDetails : productDetailsReducer,
  user : userReducer,
  profile : profileReducer,
  forgotPassword : forgotPasswordReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;