import React from 'react';
import Dashborad from '../layout/Dashborad';
import { Outlet } from 'react-router-dom';

const MainDashborad = () => {
    return (
        <div className="d-flex">
            <Dashborad></Dashborad>
            <Outlet></Outlet>
        </div>
    );
};

export default MainDashborad;