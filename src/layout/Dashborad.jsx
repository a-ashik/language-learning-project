import React from 'react';
import { Nav, Tab, Tabs } from 'react-bootstrap';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashborad = () => {

    const isAdmin = true;
    const isInstructor = true;



    return (
        <div className="h-100">
                    <div style={{display:'flex',height:'100vh', overflow:'scroll initial'}}>
            <CDBSidebar textColer="#fff" backgroundColor="black" className="h-100">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <Link to="/">BACK TO HOME</Link>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">

                    {
                        isAdmin ? (

                            <CDBSidebarMenu>
                                <h6 className="text-center border-bottom border-top py-2">Admin</h6>
                                <NavLink exact to="dashboard/alluser" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">
                                        All User
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">
                                    Classes
                                </CDBSidebarMenuItem>
                            </NavLink>
                            </CDBSidebarMenu>

                        ) : isInstructor ? (

                            <CDBSidebarMenu>
                                <h6 className="text-center border-bottom border-top py-2">Instructor</h6>
                            <NavLink exact to="dashboard/allclass" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">
                                    all classes
                                </CDBSidebarMenuItem>
                            </NavLink>
                            </CDBSidebarMenu>

                        ) : (

                            <CDBSidebarMenu>
                                <h6 className="text-center border-bottom border-top py-2">Student</h6>
                                <NavLink exact to="dashboard/selectclass" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">
                                    Selected Classes
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="dashboard/enrolledclasses" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">
                                    My Enrolled Classes
                                    </CDBSidebarMenuItem>
                                </NavLink>
                            </CDBSidebarMenu>
                        )
                    }


                </CDBSidebarContent>
                <CDBSidebarFooter style={{textAlign:'center'}}>
                    <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                        sidebar footer
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
        
        </div>
    );
};

export default Dashborad;
