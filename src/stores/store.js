import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import movieReducer from "../reducers/movieReducer";

const store = createStore(
    combineReducers({
        auth: authReducer,
        movie: movieReducer
    }),
    applyMiddleware(
        thunk
    )
);

export default store;