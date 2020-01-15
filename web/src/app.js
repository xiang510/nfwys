import React, { Component} from 'react';
import store from './stores'
import Test from './containers/testContainer/index.js';

import { Provider } from 'react-redux';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return <Provider store={store}>
            <Test />
        </Provider>
    }
}

export default App;