import Banners from '../components/Banners';

const routes = [
    {
        path: "/banners",
        component: Banners,
        fetchInititalData: Banners.inititalData
    }
];

export default routes;
