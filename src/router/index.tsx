import { createBrowserRouter } from 'react-router';
import Login from '../pages/login';
import Layout from '../layout';
import Index from '../pages/index';

export const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: '',
                Component: Index,
            },
            {
                path: 'about',
                Component: () => <div>About</div>,
            },
        ],
    },
    {
        path: '/login',
        Component: Login,
    },
]);

export default router;
