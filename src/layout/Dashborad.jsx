import React, { useContext, useEffect, useState } from 'react';
import { Nav, Spinner, Tab, Tabs } from 'react-bootstrap';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';



const Dashborad = () => {

    const {user,loader} = useContext(AuthContext)

    const {data : users =[], refetch} = useQuery(['users'], async()=>{
        const res = await fetch('https://language-server-ten.vercel.app/users')
        return res.json()
    })

    const [isAdmin, setIsAdmin] = useState(false)
    const [isInstructor, setIsInstructor] = useState(false)

    useEffect(() => {
        const Admin = users.find(data => {
            if(user.email == data.email && data.role === 'admin'){
               setIsAdmin(true)
            }else if(user.email == data.email && data.role === 'instructor'){
                setIsInstructor(true)
            }
            return false
            
        })
    
    },[])

    console.log(isAdmin);
    console.log(isInstructor);

    // const isInstructor = true;


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
                                        All Users
                                    </CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink exact to="dashboard/allclass" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">
                                    Manage Classes
                                </CDBSidebarMenuItem>
                            </NavLink>
                            </CDBSidebarMenu>

                        ) : isInstructor ? (

                            <CDBSidebarMenu>
                                <h6 className="text-center border-bottom border-top py-2">Instructor</h6>
                            <NavLink exact to="addclass" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">
                                    Add a Class
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="myclasses" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="columns">
                                    My classes
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
                                <NavLink exact to="payment" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="columns">
                                    Payment
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
                {/* <CDBSidebarFooter style={{textAlign:'center'}}>
                    <div className="sidebar-btn-wrapper" style={{ padding :'20px 5px' }}>
                        sidebar footer
                    </div>
                </CDBSidebarFooter> */}
            </CDBSidebar>
        </div>
        
        </div>
    );
};

export default Dashborad;
