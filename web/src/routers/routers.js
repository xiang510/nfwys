import Login from '../containers/loginContainer';
import Home from '../containers/homeContainer';
import Test from '../containers/testContainer';
import NoMatch from '../containers/noMatchContainer'

const routers = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/notfound',
        component: NoMatch,
    },
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/index',
                component: Test,
                requireLogin: true
           },
           {
                path: '/test',
                component: Test,

           },
        ]
    },
    
    
    
];

export default routers;