import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Instructors from './pages/Instructors/Instructors.jsx';
import Classes from './pages/Classes/Classes.jsx';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashborad from './layout/Dashborad';
import MySelectClass from './Dashborad/MySelectClass';
import MainDashborad from './Dashborad/MainDashborad';
import AllClass from './Dashborad/AllClass';
import EnrolledClasses from './Dashborad/EnrolledClasses';
import AllUser from './Dashborad/AllUser';
import Myclass from './Dashborad/Myclass';
import AddClass from './Dashborad/AddClass';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/instructors",
        element:<Instructors></Instructors>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/dashboard",
    element:<PrivateRoute><MainDashborad></MainDashborad></PrivateRoute>,
    children: [
      {
        path: "dashboard/selectclass",
        element:<MySelectClass></MySelectClass>
      },
      {
        path: "dashboard/enrolledclasses",
        element: <EnrolledClasses></EnrolledClasses>
      },
      {
        path: "dashboard/alluser",
        element: <AllUser></AllUser>
      },
      {
        path: "dashboard/allclass",
        element: <AllClass></AllClass>
      },
      {
        path: "myclasses",
        element: <Myclass></Myclass>
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>
      },
      {
        path: "myclasses/addclass",
        element: <AddClass></AddClass>
      },
    ]
 }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>  
      </AuthProvider>
  </React.StrictMode>,
)
