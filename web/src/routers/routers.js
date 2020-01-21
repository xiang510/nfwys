import Login from '../containers/loginContainer';
import Home from '../containers/homeContainer';
import Index from '../containers/indexContainer';
import Test from '../containers/testContainer';
import NoMatch from '../containers/noMatchContainer';

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
                component: Index,
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