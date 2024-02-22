import Home from '../Components/Home';
import Portfolio from '../Components/Portfolio';
import StockManager from "../Components/Projects/Presentations/OPTIM'STOCK/StockManager";

const MainRoutes = {
    path: '/',
    element: <Portfolio />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: 'projects',
            children: [
                { path: 'digital-mind-agency', element: <></> },
                { path: 'pcc-membership-management', element: <></> },
                { path: 'stock-manager', element: <StockManager /> }
            ]
        }
    ]
};

export default MainRoutes;
