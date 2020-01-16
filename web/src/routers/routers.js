import Home from '../containers/homeContainer';
import Test from '../containers/testContainer';

const routers = [

    {
        path: '/',
        component: Home,
        routers: [
           {
                path: '/test',
                component: Test,
           }
        ]
    }
];

export default routers;