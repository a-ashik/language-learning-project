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
                <div>
                    <h1 className='text-center text-decoration-underline'>Dashboard</h1>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainDashborad;