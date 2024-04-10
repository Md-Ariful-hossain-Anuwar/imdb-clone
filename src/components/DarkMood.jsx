"use client"
import React, { Fragment, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkMood = () => {
    const htmlTag = document.getElementById('htmlId');
    const [toggle,setToggle] = useState(true);
    const HandleControll=()=>{
        setToggle(!toggle);
        htmlTag.classList.add('dark');
    }
    return (
        <Fragment>
            <button onClick={HandleControll} className='text-3xl'>{toggle?<CiLight />:<MdDarkMode />}</button>
        </Fragment>
    );
};

export default DarkMood;