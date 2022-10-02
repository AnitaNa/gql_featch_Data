import React from 'react';
import '../../common/styles.css';

export interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (    
        <>
        <h1 className='heading'>{title}</h1>
        </>
    )
}
export default Header;
