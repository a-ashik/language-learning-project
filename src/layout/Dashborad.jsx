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
    return (
        <div className="h-100">
                    <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
            <CDBSidebar textColer="#fff" backgroundColor="black">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <Link to="/">BACK TO HOME</Link>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="dashboard/allclass" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                classes
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                             <CDBSidebarMenuItem icon="columns">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>

                    <CDBSidebarMenu>
                        <NavLink exact to="dashboard/allclass" activeClassName="activeClicked">
                           
                        <CDBSidebarMenuItem icon="columns">
                                all classes
                        </CDBSidebarMenuItem>
                            
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="rows">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>

                    </CDBSidebarMenu>

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
