import React, { Component} from 'react';
import { dataUtils } from '../../utils'

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props);
       
    }
    render() {
        return <div>This is a index page.</div>
    }
}

export default Index;