import React, { Component} from 'react';
import { dataUtils } from '../../utils'

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props);
        let { handleSleepTest, handleToast  } = this.props;
        handleSleepTest();
        handleToast({
            showToast: true,
            toastMessage: 'this is a toast message.'
        });
    }
    render() {
        let { test } = this.props;
        return <div>{test}</div>
    }
}

export default Test;