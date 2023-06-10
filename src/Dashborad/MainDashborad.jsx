import React from 'react';
import Dashborad from '../layout/Dashborad';
import { Outlet } from 'react-router-dom';

const MainDashborad = () => {
    return (
        <div className="d-flex">
            <div className="col-md-3">
                <Dashborad></Dashborad>
            </div>
            <div col-md-9>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainDashborad;