import Home from '../Components/Home';
import Portfolio from '../Components/Portfolio';
import StockManager from "../Components/Projects/Presentations/OPTIM'STOCK/StockManager";
import PccMembership from '../Components/Projects/Presentations/PccMembership/PccMembership';
import Tabibi from '../Components/Projects/Presentations/Tabibi/Tabibi';

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
                { path: 'tabibi', element: <Tabibi /> },
                { path: 'pcc-membership-management', element: <PccMembership /> },
                { path: 'stock-manager', element: <StockManager /> }
            ]
        }
    ]
};

export default MainRoutes;
