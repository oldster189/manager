import React, { Component } from 'react'; 
import { Provider } from 'react-redux'; 
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';
  

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDFjm2Z9raFpmNuf7gtFLrft8SEtfd8pfI',
            authDomain: 'manager-25f7a.firebaseapp.com',
            databaseURL: 'https://manager-25f7a.firebaseio.com',
            projectId: 'manager-25f7a',
            storageBucket: 'manager-25f7a.appspot.com',
            messagingSenderId: '608910111548'
        };
        firebase.initializeApp(config);
    }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>
            <RouterComponent />
        </Provider> 
    );
  }
}
 
