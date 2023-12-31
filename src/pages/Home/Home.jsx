import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import SinglelClassItem from '../SingleClassItem/SinglelClassItem';
import SingleInstructor from '../SingleInstructor/SingleInstructor';
import About from '../About/About';
import { Zoom } from "react-awesome-reveal";

const Home = () => {

    const [classData,setClassData] = useState([])
    const [instructorData,setInstructorData] = useState([])


    useEffect(() => {
        fetch('https://language-server-ten.vercel.app/classes')
        .then((res) => res.json())
        .then((data) =>setClassData(data))

        fetch('https://language-server-ten.vercel.app/instructor')
        .then((res) => res.json())
        .then((data) =>setInstructorData(data))
    },[])

    console.log(instructorData);

    return (
        <div className=''>
            <Slider></Slider>
            <div className='row container mx-auto mt-5'>
                <h1 className='text-center'>Popular Classes</h1>
                {
                        classData.map((data) =>
                        <SinglelClassItem
                        key={data._id}
                        data={data}
                        ></SinglelClassItem>
                        ) 
                 
                }
            </div>
            <div className="row container mx-auto mt-5">
            <h1 className='text-center'>Popular Instructors </h1>
            {
                        instructorData.map((data) =>
                        <SingleInstructor
                        key={data._id}
                        data={data}
                        ></SingleInstructor>
                        )
                 
                }
            </div>
                <About></About>
        </div>
    );
};

export default Home;