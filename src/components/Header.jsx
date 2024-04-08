import React, { Fragment } from 'react';
import MenuItem from './MenuItem';
import { FaHome } from "react-icons/fa";
import { FaAccessibleIcon } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
    return (
        <Fragment>
            <div className='flex justify-between items-center p-3 max-w-6xl m-auto'>
                <div className='flex gap-4'>
                    <MenuItem title="Home" url="/" icon={<FaHome />}></MenuItem>
                    <MenuItem title="About" url="/about" icon={<FaAccessibleIcon />}></MenuItem>
                </div>
                <div className='flex gap-2 items-center'>
                    <Link href="/"><span className='font-bold uppercase bg-amber-500 px-3 py-1 rounded-lg'>imdb</span></Link>
                    <span className='uppercase hidden sm:inline'>clone</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;