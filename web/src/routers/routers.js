import Home from '../containers/homeContainer';
import Test from '../containers/testContainer';

const routers = [

    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/index',
                component: Test,
                exact: true,
           },
           {
                path: '/test',
                component: Test,
           }
        ]
    }
];

export default routers;