import React, { Fragment } from 'react';
import Link from "next/link";

const MenuItem = ({title,url,icon}) => {
    return (
        <Fragment>
            <Link className='hover:text-purple-500' href={url}><p className='sm:hidden text-2xl'>{icon}</p><p className='uppercase hidden sm:inline'>{title}</p></Link>
        </Fragment>
    );
};

export default MenuItem;