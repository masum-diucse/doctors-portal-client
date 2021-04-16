import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import TopBar from '../../Shared/TopBar/TopBar';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
            <TopBar></TopBar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;